const mongoose =require("mongoose");
const review = require("./review");
const Schema=mongoose.Schema;//Stored in variable Schema so we should not write it again and again
const Review=require("./review.js");

const listingSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    
    image:{
        url:String,
        filename:String,
    },
    
    price:Number,
    location:String,
    country:String,
     
    //   geoJSON format 
      geometry: {
        type: {
            type: String, // Don't do `{ geometry: { type: String } }`
            enum: ['Point'], // 'geometry.type' must be 'Point'
            required: true
        },
        coordinates: {
            type: [Number], // Array of numbers, [longitude, latitude]
            required: true
        }
    },

    reviews:[
        {
        type: Schema.Types.ObjectId,
        ref:"Review",
        }
    ],

    owner:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },

})


listingSchema.post("findOneAndDelete", async(listing)=>{

    if(listing){
        await Review.deleteMany({_id:{$in:listing.reviews}});
    }
    
})

const Listing=mongoose.model("Listing", listingSchema);
module.exports=Listing;