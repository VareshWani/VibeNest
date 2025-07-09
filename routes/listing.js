const express = require("express");
const router = express.Router();

const Listings = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { listingSchema } = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");
const {isLoggedIn}=require("../middleware.js"); 
const {isOwner}=require("../middleware.js");

const listingController=require("../controllers/listings.js");

const {storage}=require("../cloudConfig.js");

const multer=require("multer");
const upload =multer({storage});


//Safe validation middleware
const validatelisting = (req, res, next) => {
    const { error } = listingSchema.validate(req.body);
    if (error) {
        const errMsg = error.details.map(el => el.message).join(", ");
        return next(new ExpressError(400, errMsg)); // ✅ safe way to pass error
    }
    next();
};

//Index Route – Show all listings
router.get("/", wrapAsync(listingController.index));

//Show form to create new listing
router.get("/new", isLoggedIn,listingController.renderNewForm);

//Create listing (POST)
router.post("/",isLoggedIn,upload.single("listing[image]"),validatelisting, wrapAsync(listingController.createListing));
// router.post("")

//Show a single listing
router.get("/:id", wrapAsync(listingController.showListing));

//Edit form
router.get("/:id/edit",isLoggedIn,isOwner, wrapAsync(listingController.renderEditListingForm));

//Update listing
router.put("/:id",isLoggedIn,isOwner,upload.single("listing[image]"), validatelisting, wrapAsync(listingController.updateListing));

//Delete listing
router.delete("/:id",isLoggedIn,isOwner, wrapAsync(listingController.destroyListing));

module.exports = router;
