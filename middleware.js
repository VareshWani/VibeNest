const Listings=require("./models/listing");
const Review=require("./models/review.js");

module.exports.isLoggedIn=(req,res,next)=>{
    // console.log(req.path,'..',req.originalUrl);
     if(!req.isAuthenticated()){
        //redirectedURL save
        req.session.redirectUrl=req.originalUrl;
        req.flash("error","you must be logged in to create listing!");
        return res.redirect("/login");

    }
    next();
}

module.exports.saveRedirectUrl=(req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl=req.session.redirectUrl;
    }

    next();

}

module.exports.isOwner=async (req,res,next)=>{
    const { id } = req.params;
    let listing=await Listings.findById(id);
    if(!listing.owner._id.equals(res.locals.currentUser._id)){
        req.flash("erro","you don't have permission to edit this listing.");
        return res.redirect(`/listings/${id}`);
    }

    next();
}

module.exports.isReviewAuthor=async (req,res,next)=>{
    const { id,reviewId } = req.params;
    let review=await Review.findById(reviewId);
    if(!review.author.equals(res.locals.currentUser._id)){
        req.flash("error","You are not the author of this review.");
        return res.redirect(`/listings/${id}`);
    }

    next();
}