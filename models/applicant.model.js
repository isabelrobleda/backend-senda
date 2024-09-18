const { Schema, model } = require("mongoose");

const applicantSchema = new Schema({
    
        FullName: { type: String, required: true },
        BirthDate: { type: Date, required: true },
        GradeRequested: { type: String, required: true },
        SchoolCycle: { type: String},
        Grade: { type: String},
        SchoolName: { type: String},
        ReasonOfChange: { type: String},
        ParentsNames: { type: String, required: true },
        Phone: { type: Number, required: true },
        Email: { type: String, required: true },
        HowDidYouKnow: { type: String, required: true },
        Expectations: { type: String},
        ImportantMatters: { type: String},
    })

const applicant = model("Applicant", applicantSchema);
module.exports = applicant;