const express = require("express");
const app = express();
const compression = require("compression");
// compress all responses
app.use(compression());

app.use(express.static("public"));

app.listen(8888, () =>
  console.log("gatsby-reactstrap listening on http://localhost:8888")
);
