const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, "build")));
app.get("/mastodon", function (_, res) {
  res.redirect("https://mastodon.world/@alexandercaley");
});
app.get("/*", function (_, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(port, () => console.log(`app listening on port ${port}!`));
