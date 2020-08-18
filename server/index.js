var express = require("express");
var app = express();
var cors = require("cors");
const path = require("path");

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
var dispmsg = "GetiingDisplay";
app.get("/disp", function (req, res) {
  console.log("sendingDisp");
  res.send(dispmsg);
});

app.post("/value", function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
