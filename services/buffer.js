var MessageBuffer = function() {
    var msgLimit = 10000;
    var messages = [];
    var messagesPerSecond = 0;

    function setLimit(limit) {
        msgLimit = limit || msgLimit;
    }

    function push(message) {
        if (messages.length == msgLimit)
            messages = [];
            
        if (message) {
            message.timestamp = new Date();
            messages.push(message);
        }
    }

    function calculateMessagesPerSecond() {
        let lastCount = 0;

        setInterval(function() {
            let lastCount = getMessageCount();
            setTimeout(function() {
                let current = getMessageCount();
                messagesPerSecond = current - lastCount;
            }, 1000);
        }, 1000);
    }

    function getMessageCount() {
        return messages.length;
    }

    function getMessagesPerSecond() {
        return messagesPerSecond;
    }

    function getMessages() {
        return messages;
    }

    calculateMessagesPerSecond();

    return {
        push: push,
        getMessages: getMessages,
        getMessageCount: getMessageCount,
        getMessagesPerSecond: getMessagesPerSecond,
        setLimit: setLimit
    }
}();

module.exports = MessageBuffer;