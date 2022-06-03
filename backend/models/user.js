import mongoose from "mongoose";
import JWT from 'jsonwebtoken'

const UserSchema = new mongoose.Schema({
    Name: String,
    Password: String,
    Role: String,
    Week: Number,
    Domain: String,
    Advisor: {type: mongoose.Schema.Types.ObjectId}
})

UserSchema.methods.getJWTToken = function (user) {
    return JWT.sign(user, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });
}

export const User = mongoose.model('User', UserSchema) 