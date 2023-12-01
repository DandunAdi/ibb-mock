const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
var cors = require("cors");
const loginServiceController = require("./controllers/loginServiceController");
const userServiceController = require("./controllers/userServiceController");
const myAccountServiceController = require("./controllers/myAccountServiceController");
const transferServiceController = require("./controllers/transferServiceController");
const massTransferServiceController = require("./controllers/massTransferServiceController");
const softTokenServiceController = require("./controllers/softTokenServiceController");

app.use(cors({ exposedHeaders: ["access_token", "content-type", "expire"] }));
app.use(express.json());

app.use((req, res, next) => {
  console.log("REQUEST incoming", req.url);
  next();
});

app.use("/api/loginservice", loginServiceController);
app.use("/api/userservice", userServiceController);
app.use("/api/myaccountservice", myAccountServiceController);
app.use("/api/transferservice", transferServiceController);
app.use("/api/masstransferservice", massTransferServiceController);
app.use("/api/softtokenservice", softTokenServiceController);

app.listen(port, () => {
  console.log(`Server is running at PORT:${port}`);
});
