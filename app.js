var express = require('express');
var cors = require('cors');
var app = express();

var service = null;
var allowedServices = ['eventhubs', 'kafka'];
var buffer = require('./services/buffer.js');
var db = require('./services/db.js');
db.setBuffer(buffer);

app.use(express.static(__dirname + "/site"));
app.use(cors());

if (!process.env.service) {
    throw "Please provide a service. Allowed values: " + allowedServices.join();
}
else if (allowedServices.indexOf(process.env.service) == -1) {
    throw "service " + process.env.service + " is not supported";
}

service = require('./services/' + process.env.service);
service.init(buffer);

app.get('/query', function(req, res) {
    var result = db.query(req.query.q);
    res.json(result);
});

app.get('/stats', function(req, res) {
    var total = buffer.getMessageCount();
    var perSecond = buffer.getMessagesPerSecond();
    var errors = service.getErrorCount();

    res.json({status: 'ok', count: total, eventsPerSecond: perSecond, errorCount: errors });
});

app.get('/metadata', function(req, res) {
    var result = service.getMetadata();
    res.json({status: 'ok', metadata: result });
});

app.get('/', function(req, res) {
    res.sendFile('index.html');
});

app.get('/status', function(req, res) {
    res.status(200).send("Streamsight status: Running");
});

var port = process.env.PORT || 4000;
app.listen(port);

console.log("Streamsight is running at localhost:" + port);