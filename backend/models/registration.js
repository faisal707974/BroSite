import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const registrationSchema = new mongoose.Schema({
    Name: String,
    'Date of Birth': Date,
    Gender: String,
    Address: String,
    Country: String,
    State: String,
    District: String,
    Email: String,
    WhatsApp: String,
    'Employment Status': String,
    Qualification: String,
    'Name of College': String,
    'graduation': Number,
    password: String,
    'More personal': String,
    'sps': String,
    'Motivated by': String,
    'Know about SPS': String,
    role: String,
    Batch: String,
    Week: Number,
    domain: String
})

registrationSchema.methods.matchPassword = async function (enteredPassword, callback) {
    return await bcrypt.compare(enteredPassword, this.password);
};

registrationSchema.pre("save", function (next) {
    if (!this.isModified("password")) {
        next();
    }
    bcrypt.hash(this.password, 10, (err, hash) => {
        this.password = hash
        next()
    });
});


const registration = mongoose.model('registration', registrationSchema)
export default registration