// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);


// 👇 Start handling routes here

const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);


const applicantRoutes = require("./routes/applicant.routes");
app.use("/api",applicantRoutes);

const contactRouter = require('./routes/contact.routes');
app.use('/api', contactRouter);


module.exports = app;
