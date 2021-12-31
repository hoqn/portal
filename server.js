var express = require('express');
var app = express();
var router = require('./router/main')(app);

app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');
app.engine('html', require('pug').renderFile);

app.use(express.static('public'));

var server = app.listen(4000, function(){
  console.log("Preview server has started on port 4000");
});