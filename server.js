//Install express server
const express = require("express");
const path = require("path");
const app = express();

// Your dist folder
app.use(express.static(__dirname + "/react-client/dist/"));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname + "/react-client/dist/index.html"));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
