const express=require("express");
const router=express.Router({mergeParams:true});

const wrapAsync=require("../utils/wrapAsync.js");

const ExpressError=require("../utils/ExpressError.js");

const {reviewSchema}=require("../schema.js");

const Listings=require('../models/listing.js');

const reviewController=require("../controllers/reviews.js");


const Review=require("../models/review.js");
const {isLoggedIn,isReviewAuthor}=require("../middleware.js");


const validateReview=(req,res,next)=>{
    let {error}=reviewSchema.validate(req.body);
        
        if(error){
            let errMsg=err.details.map((el)=> el.message).join(",");
            throw new ExpressError(400,errMsg);
        } else{
            next();
        }
}


// Routes for Reviews 

// Reviews Post Route 
router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.postReviews));

// Delete Route for Review 
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.destroyReview));


module.exports=router;
