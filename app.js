if(process.env.NODE_ENV !="production"){
    require('dotenv').config();
}

// console.log(process.env.SECRET);


const express = require("express");
const app = express();

const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");
const dbUrl=process.env.ATLASDB_URL;

const flash = require("connect-flash");
const passport = require("passport");
const LocalStratergy = require("passport-local");
const User = require("./models/user.js");

const path = require("path");
const methodOverride = require("method-override");
const session = require("express-session");
const MongoStore=require('connect-mongo');


const Store=MongoStore.create({
    mongoUrl:dbUrl,
    crypto:{
        secret:process.env.SECRET,
    },
    touchAfter:24*3600
})

Store.on("error",()=>{
    console.log("Error in mongo session Store",err)
})

// Session Configuration
const sessionOptions = {
    Store,
    secret:process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
    }
};



// Connect to MongoDB
main().then(() => {
    console.log("connected to DB");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(dbUrl);
}

// View Engine and Static Files
app.engine('ejs', ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// Middleware Setup
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(session(sessionOptions));
app.use(flash());

// Passport Setup (AFTER session setup)
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStratergy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Flash middleware (AFTER session + passport)
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currentUser = req.user;
    next();
});

// Demo Route Demo User (can stay anywhere)
// app.get("/demouser", async (req, res) => {
//     let fakeUser = new User({
//         email: "student@gmail.com",
//         username: "delta-student",
//     });

//     let registeredUser = await User.register(fakeUser, "helloworld");
//     res.send(registeredUser);
// });

// Root Route
// app.get("/", (req, res) => {
//     res.render("./listings/index.ejs");
// });

// Routes
const listingsRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/review.js");
const userRouter= require("./routes/user.js");

app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews", reviewsRouter);
app.use("/",userRouter);

// 404 Route (must come after all routes)
// app.all("*", (req, res, next) => {
//     res.status(404).send("Page Not Found!");
// });

app.use((req,res)=>{
    res.send("Page Not Found!");
})

// Global Error Handler (final middleware)
app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong" } = err;
    res.status(statusCode).render("error.ejs", { err });
});

// Server Listener
app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});
