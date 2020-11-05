const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const sendGrid = require("@sendgrid/mail");
const { sendgridKey } = require("./keys");

const port = 4000;

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use((_, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/api", (_, res) => {
  res.send("API STATUS: Running!");
});

app.post("/api/email", (req, res) => {
  console.log(req.body);

  sendGrid.setApiKey(sendgridKey);
  const msg = {
    to: "alexandercaley@gmail.com",
    from: "me@alexandercaley.com",
    subject: `Website Contact-${req.body.name}`,
    text: `Sender: ${req.body.email}\n${req.body.message}`,
  };

  sendGrid
    .send(msg)
    .then(() => {
      res.status(200).json({
        success: true,
      });
    })
    .catch((err) => {
      console.log("error: ", err);
      res.status(401).json({
        success: false,
      });
    });
});

app.listen(port, () => console.log(`app listening on port ${port}!`));
