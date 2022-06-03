import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const registrationSchema = new mongoose.Schema({
    'Name': String,
    'Date of Birth': Date,
    'Gender': String,
    'Address': String,
    'Country': String,
    'State': String,
    'District': String,
    'Email': String,
    'WhatsApp': String,
    'Employment Status': String,
    'Qualification': String,
    'Name of College': String,
    'Graduation': Number,
    'Password': String,
    'More personal': String,
    'Sps': String,
    'Motivated by': String,
    'Know about SPS': String,
    'Role': String,
    'Batch': String,
    'Week': Number,
    'Domain': String,
    'Photo': {
        'url': String,
        'id': String
    }
})

registrationSchema.methods.matchPassword = async function (enteredPassword, callback) {
    return await bcrypt.compare(enteredPassword, this.Password);
};

registrationSchema.pre("save", function (next) {
    if (!this.isModified("Password")) {
        next();
    }
    bcrypt.hash(this.Password, 10, (err, hash) => {
        this.Password = hash
        next()
    });
});


const registration = mongoose.model('registration', registrationSchema)
export default registration