var BusinessLayer = function () {
    this.Name = "BusinessLayer";

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // NAME:    BluetoothPush()
    // DEFINE:  Synchronize transactional data with other devices on this flight via Bluetooth.
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    this.BluetoothPush = function () {
        try {

        }
        catch (err) {
            ex.Log(err, this.Name + ".BluetoothPush()");
        }
    };

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // NAME:    ChangeDeviceType()
    // DEFINE:  Toggle the device between Master/Satellite.
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    this.ChangeDeviceType = function (isMaster) {
        try {

        }
        catch (err) {
            ex.Log(err, this.Name + ".ChangeDeviceType(" + isMaster + ")");
            return false;
        }
    };

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // NAME:    CloseBarset()
    // DEFINE:  Close out a Barset (No more transactions or updates allowed).
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    this.CloseBarset = function (barsetNumber) {
        try {

        }
        catch (err) {
            ex.Log(err, this.Name + ".CloseBarset(" + barsetNumber + ")");
            return false;
        }
    };

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // NAME:    CloseFlight()
    // DEFINE:  Close out a flight instance (sector or leg).
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    this.CloseFlight = function (flightInstanceID) {

    };

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // NAME:    FALogin()
    // DEFINE:  Log a Crew member into a flight instance
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    this.FALogin = function (crewID, barsetNumber) {
        try {

        }
        catch (err) {
            ex.Log(err, this.Name + ".FALogin(" + crewID + "," + barsetNumber + ")");
        }
    };

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // NAME:    FALogout()
    // DEFINE:  Log a Crew member into a flight instance
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    this.FALogout = function (crewID, barsetNumber) {
        try {

        }
        catch (err) {
            ex.Log(err, this.Name + ".FALogout(" + crewID + "," + barsetNumber + ")");
        }
    };

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // NAME:    getDevices()
    // DEFINE:  Returns a list of devices that are visible via Bluetooth.
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    this.getDevices = function () {
        try {
            return true;
        }
        catch (err) {
            ex.Log(err, this.Name + ".getDevices()");
            return false;
        }
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////
    // NAME: LastSyncDate()
    // DEFINE:  Returns the Date the device as last synched to the back office.
    //////////////////////////////////////////////////////////////////////////////////////////////////
    this.LastSyncDate = function () {
        try {
            var lastSyncDate = new Date(localStorage.LastSyncDate);
            return lastSyncDate;
        }
        catch (err) {
            ex.Log(err, this.Name + ".LastSyncDate()");
            return null;
        }
    };

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // NAME:    OpenBarset()
    // DEFINE:  Opens a Barset for business ().
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    this.OpenBarset = function (barsetNumber) {
        try {
            return true;
        }
        catch (err) {
            ex.Log(err, this.Name + ".OpenBarset(" + barsetNumber + ")");
            return false;
        }
    };

    this.OpenFlight = function (flightInstanceID) {
        try {
            return true;
        }
        catch (err) {
            ex.Log(err, this.Name + ".OpenFlight(" + flightInstanceID + ")");
            return false;
        }
    };

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // NAME:    Sync()
    // DEFINE:  Synchronize this device with the back office.
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    this.Sync = function (startDate) {
        try {
            // ToDo: Synchronize with the back office web services.

            // Update LastSyncDate
            localStorage.LastSyncDate = new Date();
            return true;
        }
        catch (err) {
            ex.Log(err, this.Name + ".Sync(" + startDate + ")");
            return false;
        }
    };

};

// Global Variable
bl = new BusinessLayer();

// ===================================================================================================
//  NAME:   IsNumeric()
//  DEFINE: Returns a Boolean value indicating weather an expresses can be evaluated as a number.
// ===================================================================================================
function IsNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

// ===================================================================================================
//  NAME:   formatCurrency()
//  DEFINE: 
// ===================================================================================================
function formatCurrency(num) {
    num = num.toString().replace(/\$|\,/g, '');
    if (isNaN(num))
        num = "0";
    sign = (num == (num = Math.abs(num)));
    num = Math.floor(num * 100 + 0.50000000001);
    cents = num % 100;
    num = Math.floor(num / 100).toString();
    if (cents < 10)
        cents = "0" + cents;
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3) ; i++)
        num = num.substring(0, num.length - (4 * i + 3)) + ',' +
num.substring(num.length - (4 * i + 3));
    return (((sign) ? '' : '-') + num + '.' + cents);
}

function IntegerFormat(nStr) {
    nStr += ''; x = nStr.split('.');
    x1 = x[0];
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1;
}

// ===================================================================================================
//  NAME: NumberFormat()
//  DEFINE: string function.
// ===================================================================================================
function NumberFormat(nStr) {
    nStr += ''; x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

// ===================================================================================================
//  NAME: Left()
//  DEFINE: string function.
// ===================================================================================================
function Left(str, n) {
    if (n <= 0)
        return "";
    else if (n > String(str).length)
        return str;
    else
        return String(str).substring(0, n);
}

// ===================================================================================================
//  NAME: Right()
//  DEFINE: String function.
// ===================================================================================================
function Right(str, n) {
    if (n <= 0)
        return "";
    else if (n > String(str).length)
        return str;
    else {
        var iLen = String(str).length;
        return String(str).substring(iLen, iLen - n);
    }
}