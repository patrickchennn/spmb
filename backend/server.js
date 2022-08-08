const colors = require('colors');
const express = require("express");
const bodyParser = require("body-parser");
const {errorHandler} = require("./middleware/errorMiddleware.js");
require("dotenv").config();
const connectDB = require("./config/db.js");

connectDB();
const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/biodata",require("./routes/biodataRoutes.js"));
app.use(errorHandler);

app.listen(port,console.log(`app running on http://localhost:${port}`));