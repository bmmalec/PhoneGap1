var selectedItemID;
try {
    // Populate the Warehouses
    Warehouses = da.Warehouses();
    $("#WarehouseTemplate").tmpl(Warehouses).appendTo("#Warehouse");
}
catch (err) {
    ex.Log(err, "Uplift.Init()");
}

function SelectItem(cntrl, itemID) {
    var itemName = $(cntrl).html();
    var qty = $("#item" + itemID).attr("data-val");

    selectedItemID = itemID;
    $("#ItemName").html(itemName);
    $("#ItemQty").val(qty);
    $("#popupItem").popup("open");
    $("#ItemQty").focus();
}

function UpdateItem() {

}