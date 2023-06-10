const mongoose = require("mongoose");
const {v4:uuidv4} = require("uuid");

const userschema = mongoose.Schema({
    id:{
        type: String,
        default: uuidv4,
        unique: true,
    },
    name: String,
    username:String,
    email: String,
    phonenumber: String,
});

const User = mongoose.model("user", userschema);
module.exports = User;