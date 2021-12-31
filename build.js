var Pug = require('pug');
var Fs = require('fs');

var fn = Pug.compileFile('./views/index.pug');

var data = fn(require('./config'));

Fs.writeFile('./public/index.html', data, 'utf8', function(error){
  if(error) console.log('ERROR occured!\n' + error);
  else console.log('Successfully Builded.') 
});