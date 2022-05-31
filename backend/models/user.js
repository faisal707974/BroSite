import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    password: String,
    role: String,
    Week: Number,
    domain: String,
})

UserSchema.methods.getJWTToken = function (user) {
    return JWT.sign(user, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });
}

export const User = mongoose.model('User', UserSchema) 