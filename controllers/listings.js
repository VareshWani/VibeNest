const { response } = require("express");
const Listings = require("../models/listing.js");
const { config, geocoding } = require("@maptiler/client");

// Configure MapTiler API Key
// IMPORTANT: Replace 'YOUR_MAPTILER_API_KEY' with your actual API key,
// or better yet, use an environment variable like process.env.MAPTILER_API_KEY
// For development, you can set it directly, but for production, use environment variables.
// --- BEST PRACTICE: Ensure MAP_TILER_API_KEY is properly loaded from environment variables. ---
// You should typically set this at the very beginning of your application (e.g., in app.js or server.js)
// using 'dotenv' if you're not deploying to a service that manages env vars for you.
// For example:
// if (process.env.NODE_ENV !== "production") {
//     require("dotenv").config();
// }
config.apiKey = process.env.MAP_TILER_API_KEY; // Correct way to access from environment variables if dotenv is used.
// If you're setting it directly for testing, use: config.apiKey = 'YOUR_ACTUAL_API_KEY';
// The `|| MAP_TILER_API_KEY` part implies MAP_TILER_API_KEY is a global constant, which is less common.
// Stick to process.env.MAP_TILER_API_KEY
// -----------------------------------------------------------------------------------------

module.exports.index = async (req, res) => {
    const allListings = await Listings.find({});
    res.render("./listings/index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
    res.render("./listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
    const { id } = req.params;
    const list = await Listings.findById(id)
        .populate({ path: "reviews", populate: { path: "author" } })
        .populate("owner");
    if (!list) {
        req.flash("error", "Listing you requested for does not exist!");
        return res.redirect("/listings");
    }
    res.render("./listings/show.ejs", { list });
};

module.exports.createListing = async (req, res) => {
    try {
        let url = req.file.path;
        let filename = req.file.filename;

        const newListing = new Listings(req.body.listing);
        newListing.owner = req.user._id;
        newListing.image = { url, filename };

        // Combine location and country for better geocoding accuracy
        const geocodingQuery = `${req.body.listing.location}, ${req.body.listing.country}`;
        const geoResponse = await geocoding.forward(geocodingQuery);

        if (geoResponse && geoResponse.features && geoResponse.features.length > 0) {
            const geoData = geoResponse.features[0];
            newListing.geometry = {
                type: "Point",
                coordinates: geoData.geometry.coordinates
            };
            newListing.fullLocation = geoData.place_name; // Optional: save full address
        } else {
            req.flash("error", "Could not find location. Please check the address.");
            return res.redirect("/listings/new");
        }

        let savedListing = await newListing.save();
        console.log(savedListing);
        req.flash("success", "New Listing Created!");
        res.redirect("/listings");
    } catch (error) {
        console.error("Error creating listing:", error);
        req.flash("error", "Something went wrong while creating the listing.");
        res.redirect("/listings/new");
    }
};

module.exports.renderEditListingForm = async (req, res) => {
    const { id } = req.params;
    const listing = await Listings.findById(id);
    if (!listing) {
        req.flash("error", "Listing you requested for does not exist!");
        return res.redirect("/listings");
    }
    res.render("./listings/edit.ejs", { listing });
};

module.exports.updateListing = async (req, res) => {
    const { id } = req.params;
    // Note: When updating, if location/country fields are changed, you'd need to re-geocode.
    // For simplicity, this example only re-geocodes on initial creation.
    // For a full implementation, you'd add similar geocoding logic here if
    // req.body.listing.location or req.body.listing.country has changed.
    let listing = await Listings.findByIdAndUpdate(id, { ...req.body.listing }, { new: true, runValidators: true });

    if (typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename };
        await listing.save(); // Save again if image is updated
    }

    // Optional: Re-geocode on update if location/country changed
    // This block is very well implemented! It correctly re-geocodes on updates.
    if (req.body.listing.location || req.body.listing.country) {
        try {
            const geocodingQuery = `${req.body.listing.location}, ${req.body.listing.country}`;
            const geocodingResult = await geocoding.forward(geocodingQuery);

            if (geocodingResult.features && geocodingResult.features.length > 0) {
                const firstResult = geocodingResult.features[0];
                listing.geometry = {
                    type: "Point",
                    coordinates: firstResult.geometry.coordinates
                };
                listing.fullLocation = firstResult.place_name; // Update fullLocation here too
                await listing.save(); // Save updated geometry
            } else {
                req.flash("error", "Could not re-geocode location during update. Please check the address.");
                // Consider if you want to prevent the update if geocoding fails here.
                // Currently, it just flashes an error but allows other parts of the listing to update.
            }
        } catch (error) {
            console.error("Error during re-geocoding on update:", error);
            req.flash("error", "An error occurred while updating the location.");
        }
    }


    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
    const { id } = req.params;
    const deleted = await Listings.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted!");
    console.log(deleted);
    res.redirect("/listings");
};