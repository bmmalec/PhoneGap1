try{
    // RULE: Default the Flight date to Today's date.
    document.getElementById("FlightDate").value = dateFormat(new Date, "yyyy-mm-dd");

    // RULE: PAX (Passenger Count) is numeric only.
    $("#PAX").numeric();
    $("#btnOpenFlight").click(function (e) {
        var Form = document.getElementById("frmSelectFlight");
        // RULE: All Input validations must be met.
        if (Form.checkValidity()) {
            // *** Open the Flight ***
            var flightInstanceID = $("#FlightInstance").val();
            bl.OpenFlight(flightInstanceID);
        }
    });

    // Populate the Flight Instances
    FlightInstances = da.FlightInstances();
    FlightInstancesOpen = da.FlightInstances(1);
    FlightInstancesClosed = da.FlightInstances(0);

    $("#FlightsTemplate").tmpl(FlightInstancesOpen).appendTo("#FlightsOpen");
    $("#FlightsTemplate").tmpl(FlightInstancesClosed).appendTo("#FlightsClosed");
}
catch(err) {
    ex.Log(err, "flight.Init()");
}

/*============================================================================================================================
    DATE:   February 14th, 2014
    DEFINE: Populates the Form fields with the selected Flight's information.
==============================================================================================================================*/
function SelectFlight(cntrl) {

    var flightInstanceID = $(cntrl).val();
    if (flightInstanceID == -1) {
        // RULE: If Manual Entry was selected the Clear the Fields.
        $("#FlightNum").val("");
        $("#Route").val("");
        $("#FlightNum").focus();
    }
    else {
        // Populate the Fields with the Selected Flight Info.
        var flightInfo = da.find(FlightInstances, "FlightInstanceID", flightInstanceID)[0];
        $("#FlightNum").val(flightInfo.FlightNum);
        $("#Route").val(flightInfo.Origin + "-" + flightInfo.Dest);
        $("#TailNum").focus();
    }
}
