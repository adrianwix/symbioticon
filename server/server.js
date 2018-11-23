const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var cors = require("cors");

const ahoi = require("./api/ahoi");

const app = express();
app.use(cors({ origin: "*" }));
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./keys").mongoURI;

// Connect to MongoDB
mongoose
	.connect(db)
	.then(() => console.log("MongoDB Connected"))
	.catch(err => console.log(err));
//
// Use Routes
app.use("/api/ahoi", ahoi);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
