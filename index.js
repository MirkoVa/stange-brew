var express = require('express');
var app = express();


app.get('/', function (req, res) {
	res.end("Hello")
});

console.log('Server started at port 1337');
app.listen(1337);