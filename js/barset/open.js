var barsetNumber;
try {
    $("#btnOpen").click(function (e) {
        // RULE: All Input validations must be met.
        var Form = document.getElementById("frmBarset");
        if (Form.checkValidity()) {
            e.preventDefault();
            ShowConfirmation();
        }
    });

    $("#btnConfirmBarsetNumber").click(function (e) {
        // *** Open the Barset ***
        bl.OpenBarset(barsetNumber);
     });
}
catch (err) {
    ex.Log(err, "barset.open.Init()");
}

function ShowConfirmation() {
    try {
        barsetNumber = $("#BarsetNumber").val();
        // *** Get User Confirmation ***
        $("#spanBarsetNumber").html(barsetNumber);
        $("h3.ui-title span").html(barsetNumber);
        $("#popupDialog").popup("open");
    }
    catch (err) {
        ex.Log(err, "catering.ShowConfirmation()");
    }

}