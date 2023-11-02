const express = require ('express');
const mongoose = require ('mongoose');
let app = express();
async function connect(){
    let connection =  await mongoose.connect('mongodb://0.0.0.0:27017/students_and_courses');
    if (!connection) {
     console.log('noo')
    } else {
     console.log('good')
    }
 }
 connect()
//schema students
 const student_Schema = new mongoose.Schema({
    name : String,
    id : Number,
    age : Number,
    phone : String,
    email : String,
    Address : String,
    phone : String

});
// convert schema to model (class)
let student_Model = new mongoose.model("Students",student_Schema);

let newstudent = new student_Model({
    name : "Momen Mohamed",
    id : 27538311,
    age : 20,
    phone : "01200320841",
    email : "momen@gmail.com",
    Address : "ismailia tanta street"
    
}).save();

// schema courses
const coursesSchema = new mongoose.Schema({
    name : String,
    department : String,
    cost : Number
});
let coursesModel = new mongoose.model("courses",coursesSchema);

let newcourses = new coursesModel({
    name : "Science",
    department : "biology",
    cost : 200
    
}).save();


app.listen(3000, function(){
    console.log('server now is opened')
})