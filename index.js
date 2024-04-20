import express from "express";

// Creating an instance of this express.
const app = express();

//1. Basic routing using express
// get() is a http method which take a path or route which the user is going to hit.
// In this case the user is hitting into the home route which is assigned by "/".
// It also requires a call back or normal function, this is not nessecary.
// res.send() it allows us to send some data or response to the user in terms of response.
// app.get("/", (req, res) => {
//     res.send("Welcome to the express server");
// });

// app.get("/about", (req, res) => {
//     res.send("About");
// });


// 2. HTTP request methods.
// GET - allows us to retrive data
// POST - create or insert data to some databse.
// PUT - Completely Update data
// PATCH - Partially Update Data
// DELETE - Allows us to delete the data.
// ALL - Any HTTP request method. 


// Advance Routing or String Pattern
app.get("/ab?cd", (req,res)=>{
    res.send("If the user hit (acd) or (abcd) then this will work")
})

// Regex - regular expression
// In the below example the regular expression is /x/
app.get(/x/, (req,res)=>{
    res.send("If the path include the letter (x) it will work.")
})
// For example ancdex it will work only x will also work applex will also work

// Creating an express server or providing a where our server would listen to it.
app.listen(8000, () => {
    console.log("Server is up!!");
})