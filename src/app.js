const express = require("express");
const cors = require("cors");
const LogsRoutes = require("./routes/v1/logs");

const { serverPort } = require("./config");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send({ msg: "Server is running" });
});

app.use("/v1/logs/", LogsRoutes);

app.all("*", (req, res) => {
  res.status(404).send({ err: "Page not found" });
});

app.listen(serverPort, () =>
  console.log(`Server is running on port ${serverPort}`)
);
