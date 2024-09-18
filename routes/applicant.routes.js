const router = require("express").Router();
const applicant = require("../models/applicant.model");
const fs = require("fs");
require("dotenv").config();

router.post("/applicant-form", (req, res, next) => {
  const { InfoKid, InfoParents, Others } = req.body;
  
  applicant.create({
    InfoKid,
    InfoParents,
    Others,
  })
  .then((applicant) => {
    res.status(200).json(applicant);
  })
  .catch((err) => {
    res.status(500).json(err);
  })
})

module.exports = router;
