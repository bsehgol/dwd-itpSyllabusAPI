const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});



app.get("/syllabus", (req, res) => {
  const syllabus = fs.readFileSync(path.join(__dirname, "itpSyllabus.json"));
  const obj = JSON.parse(syllabus);
  res.json(obj);
});


app.listen(3000, () => {
  console.log("Server is listening on port 3000!");
});
