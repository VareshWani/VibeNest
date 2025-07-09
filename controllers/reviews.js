const Listings=require("../models/listing.js");
const Review=require("../models/review.js");

module.exports.postReviews=async(req,res)=>{
    let listing=await Listings.findById(req.params.id);
    let newReview=new Review(req.body.review);
    newReview.author=req.user._id;

    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();

    console.log("new review saved");
    req.flash("success","New Review Created!");
    // res.send("new review saved");
    res.redirect(`/listings/${listing._id}`); 
};

module.exports.destroyReview=async(req,res)=>{
    let {id,reviewId}=req.params;
    await Listings.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
    await Review.findByIdAndDelete(reviewId);
    console.log("Review Deleted");
    req.flash("success","Review Deleted!");
    res.redirect(`/listings/${id}`);

};

