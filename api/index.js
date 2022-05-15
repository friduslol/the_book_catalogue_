const express = require("express")
const mongoose = require("mongoose")
const session = require("express-session")

const port = 3001

//mongoose connection
const mongoDB = "mongodb+srv://dbTest:dbTestPass@cluster0.nuenf.mongodb.net/the_book_catalogue?retryWrites=true&w=majority"

//routes
const bookRoutes = require("./routes/bookRoutes")
const userRoutes = require("./routes/userRoutes")


//server setup
const app = express()

//parsing req.body for server
app.use(express.json())

//creating cookie
app.use(
    session({
    name: "Ballerina",
    secret: "Cookie real tastyyy",
    resave: false,
    //will only create cookie on use
    saveUninitialized: false,
                            //will expire after one week
    cookie: { secure: false, maxAge: 7*24*60*60*1000},
    }),
  );

//mongo DB setup
mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB connected...")
}).catch((err) => {
    console.log(err)
});

//routes setup
app.use("/api/v1/books", bookRoutes)
app.use("/api/v1/user", userRoutes)

app.listen(port, (err) => {
    if(err) {
        console.log("Server could not start!", err)
    }
    console.log("Listening on port", port)
});
