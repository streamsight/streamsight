'use strict';

var Eventhubs = function () {
    var client = null;
    var buffer = null;
    var EventHubClient = require('azure-event-hubs').Client;
    var Promise = require('bluebird');
    var partitionCount = 0;
    var errors = 0;

    function init(bufferService, consumerGroup = "$Default") {
        var connectionString = process.env.connectionString;
        var eventHubName = process.env.eventHubName;
        
        if (!connectionString) {
            throw "connectionString env variable is missing";
        }
        else if (!eventHubName) {
            throw "eventHubName env variable is missing";
        }

        buffer = bufferService;

        client = EventHubClient.fromConnectionString(connectionString, eventHubName);
        var receiveAfterTime = new Date();
        receiveAfterTime.setDate(receiveAfterTime.getDate() + 1);

        client.open()
            .then(client.getPartitionIds.bind(client))
            .then(function (partitionIds) {
                partitionCount = partitionIds.length;

                return Promise.map(partitionIds, function (partitionId) {
                    return client.createReceiver(consumerGroup, partitionId, { 'startAfterTime' : receiveAfterTime}).then(function (receiver) {
                        receiver.on('message', onMessageReceived);
                        receiver.on('errorReceived', onError);
                    });
                });
            }).catch(onError);
    }
    
    function getMetadata() {
        return [
            {
                name: 'Partition Count',
                value: partitionCount
            }
        ];
    }

    function onError(err) {
        console.log(err.message);
        errors++;
    }

    function getErrorCount() {
        return errors;
    }

    function onMessageReceived(ehEvent) {
        var msg = ehEvent.body;
        buffer.push(msg);
    }

    return {
        init: init,
        getMetadata: getMetadata,
        getErrorCount: getErrorCount
    }
}();

module.exports = Eventhubs;