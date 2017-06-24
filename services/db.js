"use strict";

var DB = function () {
    var alasql = require('alasql');
    var bufferService = null;
    var tableName = "events";
    
    alasql("CREATE TABLE " + tableName);

    function setBuffer(buffer) {
        bufferService = buffer;
    }
    
    function query(statement) {
        try {
            if (!statement) {
                return { status: 'error', errorMessage: 'query cannot be empty. example: ?q=your-sql-statement' };
            }

            alasql.tables[tableName].data = bufferService.getMessages();

            var result = alasql(statement);
            return { status: 'ok', results: result };
        }
        catch (e) {
            return { status: 'error' };
        }
    }

    return {
        setBuffer: setBuffer,
        query: query
    }
}();

module.exports = DB;