var selectedItemID;

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