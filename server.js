const express = require("express");
const app = express();
const { PORT } = require("./constants/constants");
const imagesApi = require("./routes/images-api");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/", imagesApi);

app.listen(PORT, function () {
  console.log("server up and running on port " + PORT);
});
