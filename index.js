const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/taskadd", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "taskAdd.html"));
});

app.get("/taskshow", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "taskShow.html"));
});

app.listen(3000);
