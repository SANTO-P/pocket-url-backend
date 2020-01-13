const express = require("express");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json({ extended: false }));

app.use("/", require("./routes/index"));
app.use("/api/url", require("./routes/urls"));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
