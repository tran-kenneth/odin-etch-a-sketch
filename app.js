const express = require("express");
const app = express();
const port = 3000;

app.use(express.static(__dirname));
//app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, (req, res) => {
  console.log(`Server running on port ${port}`);
});
