import express from "express";
import students from "./routes/student.js";

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
// app.get("/ab?cd", (req,res)=>{
//     res.send("If the user hit (acd) or (abcd) then this will work")
// })

// Regex - regular expression
// In the below example the regular expression is /x/
// app.get(/x/, (req,res)=>{
//     res.send("If the path include the letter (x) it will work.")
// })
// For example ancdex it will work only x will also work applex will also work


// We can provide a lot of callback function inside the GET method:-
/* - We can provide one callback function.
   - We can provide an array of callback function.
   - We can provide multiple callback function.
   - Or we can combine them both. */

// Creating a GET method using two callback functions
// app.get("/", (req, res, next) => {
//     res.send("First Callback");
//     next();
// We cannot send two responses in the single method
//     // Therefore for both the responses to work we use next along with req and res in the function parameters.
// }, (req, res) => {
//     res.send("Second Callback");
// })


// Creating an array of callback function
// const cb1 = (req, res, next) => {
//     console.log("First Callback");
//     next();
// }
// const cb2 = (req, res, next) => {
//     console.log("Second Callback");
//     next();
// }
// const cb3 = (req, res) => {
//     console.log("Third Callback");
//     res.send("Array of callback");
// }

// app.get("/", [cb1, cb2, cb3]);


// app.get('/student', (req, res) => {
//     res.send("All Students");
// });

// app.post('/student', (req, res) => {
//     res.send("Add new student");
// });

// app.put('/student', (req, res) => {
//     res.send("Update Student");
// });

// app.delete('/student', (req, res) => {
//     res.send("Delete Student");
// });
// The above code is not the best practise to write external apis since in the above code we are repeating the path multiple times which is not a good practise.
// So the best pratice to perform all this operations is called refactor.
// app.route() - it returns an instance of single route which we can use to handle HTTP methods with optional middleware.
// example as an above can be refactored using app.route() is mentioned below

// app.route("/students").get((req, res) => {
//     res.send("Get all students");
// }).post((req, res) => {
//     res.send("Add New Student")
// }).put((req, res) => {
//     res.send("Update Student")
// }).delete((req, res) => {
//     res.send("Delete Student")
// });

// Express router.
// For using the express router we need to take the following steps:-
// 1. Create routes folder and put your routes in a separate file.
// 2. Create an instance of express.router()
// 3. Instead of app.method we need to change this to router.method
// 4. Export router
// 5. Import router
// 6. use the (app.use) built-in middleware and provide your route

// app.use('/students', students);




// Route params (paramter):-
// Route params are the named url segment that are used to capture the value specified at their position in the url.
app.get("/student/delete/:id", (req, res) => {
    res.send(req.params.id); // This way we can get the specific data from the specific url.
    res.send("User deleted");
});

// Creating an express server or providing a where our server would listen to it.
app.listen(8000, () => {
    console.log("Server is up!!");
})