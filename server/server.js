var express = require('express');
var app = express();
var account = require('./modules/account')
var bodyParser = require('body-parser');
var path = require('path');
app.use(express.static('server/public'));
app.use(bodyParser.json());

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/account', function(request, response) {
      response.send(account.balance() + account.account(10, 1000));
      });

var server = app.listen(3000, function() {
      var port = server.address().port;
      console.log('Listening on port:', port);
    });
