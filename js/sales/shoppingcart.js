////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Page & Control Initializers
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$.mobile.loading("show");
$(function () {
    document.addEventListener("deviceready", initialize(), false);
});
$.mobile.loading("hide");

function initialize() {
    try {
        $("#Categories a").click(function (e) {
            // NOTE: The CategoryID  is stored in the "data-val" attribute of each category list item.
            var catID = $(this).attr("data-val");
            ShowCategoryItems(catID);
        });

        CategoryLoad("1101");
        CurrencyLoad();

        // RULE: Do Not Show the Checkout button or Currency dropdown if the cart is empty.
        $("#btnCheckout").hide();
        $("#CurrencyContainer").hide();

        //Debugging: This line is for demo purposes Only!
        ShoppingCartRefresh(0);
    }
    catch (err) {
        ex.Log(err, "ShoppingCart.Init()");
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// NAME: CategoryLoad()
// DEFINE:  Populates the Menu Panel with Categories associated with a barset.
//////////////////////////////////////////////////////////////////////////////////////////////////
function CategoryLoad(barsetNumber) {
    try {
        var Categories = da.Categories(barsetNumber);
        $("#CategoryTemplate").tmpl(Categories).appendTo("#Categories");
    }
    catch (err) {
        ex.Log(err, "ShopppingCart.CategoryLoad(BarsetNumber:" + barsetNumber + ")");
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// NAME: CurrencyLoad()
// DEFINE:  Populate the Currency dropdown list all of the accepted currencies for this airline.
//////////////////////////////////////////////////////////////////////////////////////////////////
function CurrencyLoad() {
    try{
        var Currencies = da.Currencies();
        $("#CurrencyTemplate").tmpl(Currencies).appendTo("#Currency");
    }
    catch (err) {
        ex.Log(err, "ShopppingCart.CurrencyLoad()");
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// NAME: CategoryItemsShow()
// DEFINE:  
//////////////////////////////////////////////////////////////////////////////////////////////////
function CategoryItemsShow(categoryID) {

}

//////////////////////////////////////////////////////////////////////////////////////////////////
// NAME: ShoppingCartRefresh()
// DEFINE:  Loads/Refresh the shopping cart.
//////////////////////////////////////////////////////////////////////////////////////////////////
function ShoppingCartRefresh(shoppingCartID) {
    $.mobile.loading("show");
    try{
        var ShoppingCart = da.ShopppingCart(shoppingCartID);

        // RULE: Do Not Show the Checkout button or Currency dropdown if the cart is empty.
        if (ShoppingCart.Items.length === 0) {
            $("#ShoppingCart").html("<h1>Empty</h1>");
            $("#btnCheckout").hide();
            $("#CurrencyContainer").hide();
        }
        else{
            $("#ShoppingCart").html($("#CartTemplate").tmpl(ShoppingCart));
            $("#btnCheckout").show();
            $("#CurrencyContainer").show();
        }
    }
    catch (err) {
        ex.Log(err, "ShopppingCart.ShoppingCartRefresh(CartID:" + cartID + ")");
    }
    $.mobile.loading("hide");
}
