var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-656!');
});

app.listen(process.env.PORT || 4000);
app.get('/nickname', function(request, response){
    response.send('happy-turtle!');
});