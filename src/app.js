const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Sanity test...");
});

app.listen(3000, function () {
  console.log("🚀 Server up and running on port 3000");
});
