'use strict';

var Kafka = function () {
    var kafka = require('kafka-node');
    var Consumer = kafka.Consumer;
    var Offset = kafka.Offset;
    var Client = kafka.Client;
    var topic = "";
    var partitionCount = 0;
    var errors = 0;

    function init(bufferService, groupId = "kafka-node-group") {
        var connectionString = process.env.connectionString;
        var kTopic = process.env.topic;

        if (!connectionString) {
            throw "connectionString env variable is missing";
        }
        else if (!kTopic) {
            throw "topic env variable is missing";
        }

        topic = kTopic;
        buffer = bufferService;

        var client = new Client(connectionString);
        var topics = [
            { topic: topic, partition: 0 }
        ];

        var options = { autoCommit: false, fetchMaxWaitMs: 1000, fetchMaxBytes: 1024 * 1024, groupId: groupId };

        var consumer = new Consumer(client, topics, options);
        var offset = new Offset(client);

        consumer.on('message', function (message) {
            var data = JSON.parse(message.value);
            buffer.push(data);
        });

        consumer.on('error', function (err) {
            console.log('error', err);
            errors++;
        });

    }

    function getMetadata() {
        return [
            {
                name: 'Topic',
                value: topic
            }
        ];
    }

    function getErrorCount() {
        return errors;
    }

    return {
        init: init,
        getMetadata: getMetadata,
        getErrorCount: getErrorCount
    }
}();

module.exports = Kafka;