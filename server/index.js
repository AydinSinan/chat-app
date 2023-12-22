const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");

const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use("/api/users", userRoute);

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

mongoose
    .connect(uri)
    .then(() => console.log("MongoDB connection established"))
    .catch((error) => console.log("MongoDB connection failed", error.message));

app.listen(port, (req, res) => {
    console.log(`Server running on port ${port}`);
});
