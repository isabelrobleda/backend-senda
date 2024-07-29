const { Schema, model } = require("mongoose");

const applicantSchema = new Schema({
    InfoKid: {
        Name: String,
        LastName: String,
        Age: Number,
        BirthDate: Date,
    },
    InfoParents: {
        FatherName: String,
        FatherLastName: String,
        MotherName: String,
        MotherLastName: String,
        Phone: Number,
        Email: String,
    },
    InfoPrevSchool: {
        SchoolName: String,
        Address: String,
        Phone: Number,
        Email: String,
    },
    NextSteps: {
        Visit: Date,
        Interview: Boolean,
    },
    })

const applicant = model("Applicant", applicantSchema);
module.exports = applicant;