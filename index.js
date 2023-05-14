const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.status(200).send("<h1>Hello Abhi welcome to server!</h1>");
});
//parameter and bugs in route
app.get("/api/v1/:token", (req, res) => {
  console.log(req.params.token);
  res.status(200).json({ param: req.params.token });
});

app.get("/api/v1/insta", (req, res) => {
  res.status(200).json({
    user: "abhishek kanakavalli",
    role: "Frontend Developer",
    experience: "1.5",
    date: Date.now(),
  });
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
