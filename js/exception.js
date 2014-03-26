var Exception = function () {

    this.Log = function (err, functionName) {
        // ToDo: Records the Exception
        alert("ERROR: " + err.message + "\nCode=" + err.code);
    };
};

// Global Variable
ex = new Exception();
