try {
    // Rule: The Print button is only visible after a report has been rendered.
    $("#btnPrintReport").hide();

    // Populate the Flight Instances
    FlightInstances = da.FlightInstances();
    FlightInstancesOpen = da.FlightInstances(1);
    FlightInstancesClosed = da.FlightInstances(0);

    $("#FlightsTemplate").tmpl(FlightInstancesOpen).appendTo("#FlightsOpen");
    $("#FlightsTemplate").tmpl(FlightInstancesClosed).appendTo("#FlightsClosed");

    $("#FlightInstanceID").change(function () {
        $.mobile.loading("show");
        LoadReport($("#FlightInstanceID").val());
        $.mobile.loading("hide");
    });
}
catch (err) {
    ex.Log(err, "Reports.OutOfStockSummary.Init()");
}

function LoadReport(flightInstanceID) {
    try {
        // Populate the Flight Instances
        ReportData = Reports.OutOfStockSummary(flightInstanceID);
        $("#Report").html($("#ReportTemplate").tmpl(ReportData));

        // Apply JQM styling to the table and show the print button.
        $("#tblReport").table();
        $("#btnPrintReport").show();
    }
    catch (err) {
        ex.Log(err, "Reports.OutOfStockSummary.LoadReport()");
    }
}
