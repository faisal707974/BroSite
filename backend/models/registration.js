import mongoose from "mongoose";

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
    Password: String,
    'More personal': String,
    'sps': String,
    'Motivated by': String,
    'Know about SPS': String
})

const NewReg = mongoose.model('NewReg',registrationSchema)
export default NewReg