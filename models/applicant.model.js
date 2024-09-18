const { Schema, model } = require("mongoose");

const applicantSchema = new Schema({
    InfoKid: {
        FullName: String,
        BirthDate: Date,
        GradeRequested: String,
        SchoolCycle: String,
        Grade: String,
        SchoolName: String,
        ReasonOfChange: String
    },
    InfoParents: {
        ParentsNames: String,
        Phone: Number,
        Email: String,
    },
    Others: {
        HowDidYouKnow: String,
        Expectations: String,
        ImportantMatters: String,
    },
    })

const applicant = model("Applicant", applicantSchema);
module.exports = applicant;