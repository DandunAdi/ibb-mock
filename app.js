const express = require("express");
const app = express();
const port = 3000;
var cors = require("cors");
const loginController = require("./controllers/loginController");
const transferController = require("./controllers/transferController");

app.use(cors());

app.use((req, res, next) => {
  console.log("REQUEST incoming", req.url);
  next();
});

app.use("/api/loginservice", loginController);
app.use("/api/transferservice", transferController);

app.listen(port, () => {
  console.log(`Server is running at PORT:${port}`);
});
