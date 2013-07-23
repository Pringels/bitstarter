var express = require('express');
var app = express();

var fs = require('fs');

app.use(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World4!');
  
  var buffer = new Buffer(fs.readFileSync(index.html));
  buffer.toString();
  response.send(buffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});