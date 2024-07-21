const mongoose = require("mongoose")
const MONGODB_URI = process.env.MONGODB_URI;

async function connectDB(){
    try{
        await mongoose.connect(MONGODB_URI)
    }catch(err){
        console.log(err)
    }
}

module.exports = connectDB