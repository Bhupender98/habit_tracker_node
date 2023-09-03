// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1/todo_list_db');
// const db = mongoose.connection;
// // error
// db.on('error',console.error.bind(console,'erroe connecting to db'));
// // up and running then message
// db.once('open',function(){
//     console.log('Success fully connected to the database')
// })

// mongodb + srv://bhupander17440:<password>@cluster0.ylsdpgp.mongodb.net/?retryWrites=true&w=majority
const mongoose = require("mongoose");

// storing the db on mongo atlas
const DB = "mongodb+srv://bhupander17440:kumar12345@cluster0.ixuvsub.mongodb.net/habit?retryWrites=true&w=majority";

// mongoose.connect('mongodb://127.0.0.1/habit_tracker');

mongoose
    .connect(DB)
    .then(() => {
        console.log("Connection successful!");
    })
    .catch((err) => console.log("no connection " + err));

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", function () {
    console.log("Connected to Database :: MongoDB");
});

module.exports = db;

