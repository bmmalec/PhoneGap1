function dbErrorHandler(err) {
    ex.Log(err, this.Name + "DataAccess.dbErrorHandler(" + err + ")");
}

var DataAccess = function () {

    //////////////////////////////////////////////////////////////////////////////////////////////////
    // NAME: Categories()
    // DEFINE:  Returns an array of categories that are associate to this barset.
    //////////////////////////////////////////////////////////////////////////////////////////////////
    this.Categories = function (barset) {
        try {
            var retValue = [
                    { CategoryID: 215, CategoryName: "Beer/Wine", Count: 5 },
                    { CategoryID: 558, CategoryName: "Hot Drinks", Count: 7 },
                    { CategoryID: 401, CategoryName: "Snacks", Count: 4 },
                    { CategoryID: 85, CategoryName: "Soft Drinks", Count: 3 },
                    { CategoryID: 214, CategoryName: "Spirits", Count: 6 }
            ];
            return retValue;
        }
        catch (err) {
            ex.Log(err, this.Name + ".Categories(Barset:" + barset + ")");
            return [];
        }
    };

    //////////////////////////////////////////////////////////////////////////////////////////////////
    // NAME: CategoryItems()
    // DEFINE:  Returns a JSON object of all of the Items in a category.
    //////////////////////////////////////////////////////////////////////////////////////////////////
    this.CategoryItems = function (barset, categoryID) {
        try {
            var retValue = {
                CurrencyID: 20,
                CurrencyName: "GBP",
                Items: [
                    { ItemID: 10001, ItemName: "Cheese Baggett", Price: 4.00 },
                    { ItemID: 10002, ItemName: "Cappuccino", Price: 2.00 },
                    { ItemID: 10003, ItemName: "Coffee", Price: 2.00 }
                ]
            };
            return retValue;
        }
        catch (err) {
            ex.Log(err, this.Name + ".CategoryItems(Barset:" + barset + ",CategoryID:" + categoryID + ")");
            return [];
        }
    };

    //////////////////////////////////////////////////////////////////////////////////////////////////
    // NAME: Currencies()
    // DEFINE:  Returns a list of all of the Currencies the airline accepts.
    //////////////////////////////////////////////////////////////////////////////////////////////////
    this.Currencies = function () {
        try {
            var retValue = [
                    { CurrencyID: 20, Symbol: "£", Abbreviation: "GBP", Name: "British Pound", Rate: 1.0, Default: true },
                    { CurrencyID: 19, Symbol: "R$", Abbreviation: "BRL", Name: "Brazilian Real", Rate: 4.004, Default: false },
                    { CurrencyID: 50, Symbol: "€", Abbreviation: "EUR", Name: "Euro", Rate: 1.222, Default: false },
                    { CurrencyID: 2, Symbol: "$", Abbreviation: "USD", Name: "U.S. Dollar", Rate: 1.674, Default: false }
            ];
            return retValue;
        }
        catch (err) {
            ex.Log(err, this.Name + ".Currencies()");
            return [];
        }
    };

    //////////////////////////////////////////////////////////////////////////////////////////////////
    // NAME: find()
    // DEFINE:  Search all 'id's (or any other property), regardless of its depth in the object
    //////////////////////////////////////////////////////////////////////////////////////////////////
    this.find = function (obj, key, val) {
        var objects = [];
        for (var i in obj) {
            if (!obj.hasOwnProperty(i)) continue;
            if (typeof obj[i] === 'object') {
                objects = objects.concat(this.find(obj[i], key, val));
            } else if (i == key && obj[key] == val) {
                objects.push(obj);
            }
        }
        return objects;
    };

    //////////////////////////////////////////////////////////////////////////////////////////////////
    // NAME: FlightInstance()
    // DEFINE:  Returns a single flight instance based on the "FlightInstanceID".
    //////////////////////////////////////////////////////////////////////////////////////////////////
    this.FlightInstance = function (flightInstanceID) {
        try {
            var retVal = this.find(this.FlightInstances(), "FlightInstanceID", flightInstanceID);
            if (retVal.length === 0) {
                return null;
            }
            else {
                return retVal[0];
            }
        }
        catch (err) {
            ex.Log(err, this.Name + ".FlightInstance(FlightInstanceID:" + flightInstanceID + ")");
            var errVal = {
                FlightInstanceID: flightInstanceID,
                Origin: null,
                Dest: null,
                TailNumber: "----",
                BarsetNumber: "-----",
                FlightDate: null,
                PAX: null
            }
            return errVal;
        }
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////
    // NAME: FlightInstances()
    // DEFINE:  Returns an Array of flight instances.
    //////////////////////////////////////////////////////////////////////////////////////////////////
    this.FlightInstances = function (status) {
        var flightDate1 = new Date();
        var flightDate2 = new Date(); flightDate2.setDate(flightDate1.getDate() - 1)
        var flightDate3 = new Date(); flightDate3.setHours(flightDate1.getHours() + 6)

        var values = [
            { FlightInstanceID: 1001, FlightNum: 251, Origin: "LTN", Dest: "GVA", BarsetNumber: "1101", TailNumber: "HA-LPB", PAX: 123, Status: 1, FlightDate: flightDate1 },
            { FlightInstanceID: 2002, FlightNum: 257, Origin: "LTN", Dest: "GVA", BarsetNumber: "2648", TailNumber: "W6-3141", PAX: 150, Status: 0, FlightDate: flightDate2 },
            { FlightInstanceID: 3003, FlightNum: 252, Origin: "GVA", Dest: "LTN", BarsetNumber: "1101", TailNumber: "HA-LPB", PAX: 85, Status: 1, FlightDate: flightDate3 }
        ];

        if (status === null || status === undefined) {
            return values;
        }
        else {
            var retVal = this.find(values, "Status", status);
            return retVal;
        }
    };

    //////////////////////////////////////////////////////////////////////////////////////////////////
    // NAME: Name()
    // DEFINE:  Returns the name of the object/class.
    //////////////////////////////////////////////////////////////////////////////////////////////////
    this.Name = "DataAccess";

    //////////////////////////////////////////////////////////////////////////////////////////////////
    // NAME: ShopppingCart()
    // DEFINE:  Returns a JSON object of a ShoppingCart/Order with details
    //////////////////////////////////////////////////////////////////////////////////////////////////
    this.ShopppingCart = function (shoppingCartID) {
        try {
            var retValue = {
                ShoppingCartID: "be0b468daf36",
                Currency: "GBP",
                CurrencySymbol: "£",
                Rate: 1.0,
                CreatedOn: null,
                Status: 0,
                SubTotal: 8.00,
                Items: [
                    { ItemID: 10001, ItemName: "Cheese Baggett", Price: 4.00, Qty: 1 },
                    { ItemID: 10002, ItemName: "Cappuccino", Price: 2.00, Qty: 1 },
                    { ItemID: 10003, ItemName: "Coffee", Price: 2.00, Qty: 1 }
                ]
            };

            return retValue;
        }
        catch (err) {
            ex.Log(err, this.Name + ".ShopppingCart(ShoppingCartID:" + shoppingCartID + ")");
        }
    };

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // NAME: ShopppingCartAddItem()
    // DEFINE:  Adds an Item to the shopping cart and returns the Total count of this ItemId in the cart.
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    this.ShopppingCartAddItem = function (shoppingCartID, itemId, qty) {
        try {
            return 1;
        }
        catch (err) {
            ex.Log(err, this.Name + ".ShopppingCartAddItem(ShoppingCartID:" + shoppingCartID + ",ItemID:" + itemId + ",Qty:" + qty + ")");
            return 0;
        }
    };

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // NAME: ShopppingCartRemoveItem()
    // DEFINE:  Removes an Item from the shopping cart and returns the Total remaining count of this ItemId in the cart.
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    this.ShopppingCartRemoveItem = function (shoppingCartID, itemId, qty) {
        try {
            return 1;
        }
        catch (err) {
            ex.Log(err, this.Name + ".ShopppingCartRemoveItem(ShoppingCartID:" + shoppingCartID + ",ItemID:" + itemId + ",Qty:" + qty + ")");
            return 0;
        }
    };

    //////////////////////////////////////////////////////////////////////////////////////////////////
    // NAME: Warehouses()
    // DEFINE:  Returns JSON array of Warehouses.
    //////////////////////////////////////////////////////////////////////////////////////////////////
    this.Warehouses = function () {
        try {
            var retVal = [
                { WarehouseID: 40, Name: "Berlin", CatererID: 87 },
                { WarehouseID: 47, Name: "Charles de Gaulle", CatererID: 87 },
                { WarehouseID: 41, Name: "Dortmund", CatererID: 87 },
                { WarehouseID: 49, Name: "Lyon", CatererID: 87 },
                { WarehouseID: 42, Name: "Madrid", CatererID: 87 },
                { WarehouseID: 48, Name: "Manchester", CatererID: 87 },
                { WarehouseID: 44, Name: "Milano", CatererID: 87 },
                { WarehouseID: 45, Name: "Nice", CatererID: 87 },
                { WarehouseID: 43, Name: "Orly", CatererID: 87 }
            ];
            return retVal;
        }
        catch (err) {
            ex.Log(err, this.Name + ".Warehouses()");
            return 0
        }
    };
};

// Global Variable
da = new DataAccess();