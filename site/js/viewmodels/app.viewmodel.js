function AppViewModel() {
    var self = this;
    var editor = null;
    self.errors = ko.observable(0);
    self.eventsPerSecond = ko.observable(0);
    self.events = ko.observable(0);
    self.metadata = ko.observable();
    self.queryElapsed = ko.observable();
    self.results = ko.observable(null);
    self.error = ko.observable();

    function getMetadata() {
        $.ajax('/metadata', { method: 'GET' }).success(function (response) {
            if (response.status == "ok") {
                self.metadata({ name: response.metadata[0].name, value: response.metadata[0].value });
            }
        });
    }

    function pollForData() {
        setInterval(function () {
            $.ajax('/stats', { method: 'GET' }).success(function (response) {
                if (response.status == "ok") {
                    self.events(response.count);
                    self.eventsPerSecond(response.eventsPerSecond);
                    self.errors(response.errorCount);
                }
            });
        }, 500);
    }

    self.query = function () {
        self.error(null);

        var query = editor.getValue();
        var startTime = new Date().getTime();

        $.ajax('/query?q=' + query, { method: 'GET' }).success(function (response) {
            if (response.status == "ok") {
                var requestTime = new Date().getTime() - startTime;
                self.queryElapsed(requestTime);
                self.results({ json: response.results, table: { columns: [] }} );

                formatResults();
            }
            else {
                self.queryElapsed(null);
                self.results(null);
                self.error("Error executing query");
            }
        });
    }

    function formatResults() {
        if (self.results()) {
            $('#json-renderer').jsonViewer(self.results().json);

            var keys = Object.keys(self.results().json[0]);
            keys.forEach(k => {
                self.results().table.columns.push(k);
                self.results.valueHasMutated();
            });
        };
    }

    function setEditor() {
        setTimeout(function () {
            editor = ace.edit("editor");
            editor.setFontSize(22);
            editor.setValue("SELECT * from events ");
            editor.setTheme("ace/theme/sqlserver");
            editor.getSession().setMode("ace/mode/sqlserver");
        }, 100);
    }

    function init() {
        getMetadata();
        pollForData();
        setEditor();
    }

    init();
}