const router = require("express").Router();
const applicant = require("../models/applicant.model");

router.post("/aplica-al-senda", (req, res, next) => {
  const {
    FullName,
    BirthDate,
    GradeRequested,
    SchoolCycle,
    Grade,
    SchoolName,
    ReasonOfChange,
    ParentsNames,
    Phone,
    Email,
    HowDidYouKnow,
    Expectations,
    ImportantMatters
  } = req.body;

  const newApplicant = { 
    FullName,
    BirthDate,
    GradeRequested,
    SchoolCycle,
    Grade,
    SchoolName,
    ReasonOfChange,
    ParentsNames,
    Phone,
    Email,
    HowDidYouKnow,
    Expectations,
    ImportantMatters
  };
  

  applicant.create(newApplicant)
    .then(() => {
      res.status(200).json(newApplicant);
    })
    .catch((err) => {
      console.error("Error saving applicant:", err);
      res.status(500).json(err);
    });
});


// GET all applicants
router.get("/aplica-al-senda", (req, res, next) => {

  applicant.find()
  .then((applicants) => {
    res.status(200).json(applicants);
  })
  .catch((err) => {
    res.status(500).json(err);
  })
});

// GET a single applicant
router.get("/aplica-al-senda/:id", (req, res, next) => {
  const { id } = req.params;

  applicant.findById(id)
    .then((applicant) => {
      if (!applicant) {
        return res.status(404).json({ message: "Applicant not found" });
      }
      res.status(200).json(applicant);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
