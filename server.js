const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("./Develop/public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutDB", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/APIroutes"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});