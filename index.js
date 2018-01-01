'use strict';

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 4000));

app.get('/', function(req, res) {
    res.redirect('/index.html');
})

app.get('/api/:name', function(req, res) {

    var options = {
        root: __dirname + '/dist/',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };

    var fileName = req.params.name;
    res.sendFile(fileName, options, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});

app.get('/:name', function(req, res) {

    var options = {
        root: __dirname + '/testInBrowser/',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };

    var fileName = req.params.name;
    res.sendFile(fileName, options, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});

app.listen(app.get('port'), function() {
    console.log('app at port:- ' + app.get('port'));
});