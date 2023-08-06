const mongoose = require('mongoose')

const connectDB = async()=>{
    try {
        mongoose.connect("mongodb://localhost:27017/db")
        console.log("Connect DB sccuss ");
    } catch (error) {
        console.log(error);
    }
}
module.exports = connectDB  