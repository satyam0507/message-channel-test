'use strict';

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 4000));

app.get('/', function(req, res) {
    res.redirect('/view/index.html');
})

function _sendRes(req, res, fileName, _root) {
    var options = {
        root: _root,
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };
    res.sendFile(fileName, options, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
}

app.get('/:folder/:name', function(req, res) {
    var fileName = req.params.name;
    var folder = req.params.folder;
    _sendRes(req, res, fileName, __dirname + '/dist/' + folder + '/');
});

app.listen(app.get('port'), function() {
    console.log('app at port:- ' + app.get('port'));
});