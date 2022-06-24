const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Data sent by browser", req.query);
  res.send("Welcome " + req.query.name);
});

app.listen(5000);
