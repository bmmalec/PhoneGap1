try{
    $("#btnSync").click(function (e) { ShowSyncConfirm(); });
    $("#btnConfirm").click(function (e) { Sync(); });
    RefreshSyncDate();
}
catch(err){
    ex.Log(err, "catering.Init()");
}

function RefreshSyncDate() {
    // Update the LastSyncDate
    var lastSyncDate = bl.LastSyncDate();
    if (lastSyncDate == null) {
        $("#LastSyncDate").html("--");
    }
    else {
        // Format LastSyncDate.
        lastSyncDate = dateFormat(lastSyncDate, "mmmm d, yyyy h:mm tt Z");
        $("#LastSyncDate").html(lastSyncDate);
    }
}

function ShowSyncConfirm() {
    $("#popupDialog").popup("open");
}

function Sync() {
    $.mobile.loading("show");
    try{
        var syncDate = StringToDate($("#SyncDate").val());
        if (bl.Sync(syncDate)) {
            // SUCCESSFUL - Synchronization with back office.
        }
        else {
            // FAILED - Synchronization with back office.
        }
    }
    catch(err){
        ex.Log(err, "catering.Sync(" + startDate + ")");
    }
    RefreshSyncDate();
    $.mobile.loading("hide");
}

function StringToDate(strDate) {
    try{
        var retVal = new Date(strDate);
        return retVal;
    }
    catch (err) {
        ex.Log(err, "catering.StringToDate(" + startDate + ")");
        return new Date();
    }
}