const mongoose = require("mongoose")
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const User = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please add a name']
    },
    email: {
        type: String,
        required: [true, 'please add a email'],
        unique: true,
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Please add vaild Email address"]
    },
    password: {
        type: String,
        required: [true, "please add a password"],
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    createdAt: {
        type: Date,
        default: Date.now
    }
})


// Encrypt passowrd using bcrypt
User.pre('save', async function(next){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
 })
 
 //Match user entered password to hashed passowrd in database
 User.methods.comparePassword = async function(enteredPassword){
     return await bcrypt.compare(enteredPassword, this.password)
 }

//sign JWT and return
User.methods.getSignedJwtToken = function() {
    return jwt.sign({id: this._id}, process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_EXPIRE
    })
}



module.exports = mongoose.model("User", User)
