var express = require('express')
var app = express()

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

app.get('/', function (req, res) {
  res.send('Hello World!')
});



app.get('/red', function (req, res) {
	var arrayOfFiles = ["index00.html","index01.html","index02.html"];
  var randomNum = Math.floor(Math.random()*arrayOfFiles.length);
	res.sendfile(arrayOfFiles[randomNum], {root: './public'}); // Files inside "public" folder
});

app.use(express.static('public'));
