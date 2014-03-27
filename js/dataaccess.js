function dbErrorHandler(err) {
    ex.Log(err, this.Name + "DataAccess.dbErrorHandler(" + err + ")");
}

var da = (function () {
    this.Name = "DataAccess";
    var db;

    //////////////////////////////////////////////////////////////////////////////////////////////////
    // NAME: Categories()
    // DEFINE:  Returns an array of categories that are associate to this barset.
    //////////////////////////////////////////////////////////////////////////////////////////////////
    function Categories (barset) {
        try {
            var retValue = [
                    { CategoryID: 215, CategoryName: "Beer/Wine", Count: 5 },
                    { CategoryID: 558, CategoryName: "Hot Drinks", Count: 7 },
                    { CategoryID: 401, CategoryName: "Snacks", Count: 4 },
                    { CategoryID: 85, CategoryName: "Soft Drinks", Count: 3 },
                    { CategoryID: 87, CategoryName: "Vegetables", Count: 10 },
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
    // NAME: categories_Save_Save()
    // DEFINE:  Refreshes the [Categories] localStorageDB table with updated information.
    // SCOPE: Private
    // PARAMETERS: data = [] of [Categories]
    //////////////////////////////////////////////////////////////////////////////////////////////////
    function categories_Save(data) {
        try {
            // ToDo: Store all of the [Categories] records in the localStorageDB.

            // NOTE: This is only Temporarily until replaced with a DB Call.
            localStorage.Categories = JSON.stringify(data);
        }
        catch (err) {
            ex.log(err, this.Name + ".categories_Save(Data:" + data + ")");
        }
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////
    // NAME: CategoryItems()
    // DEFINE:  Returns a JSON object of all of the Items in a category.
    //////////////////////////////////////////////////////////////////////////////////////////////////
    function CategoryItems (barset, categoryID) {
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
        //try {
        //    // ToDo: Return all of the CategoryItems for a Single Category.
        //    var retVal = find(Categories(null), "CategoryID", categoryID); // HACK: This is for demo purposes only. 
        //    if (retVal.length = 0) {
        //        return null;
        //    }
        //    else {
        //        var pd = retVal[0];
        //        return pd;
        //    }
        //}
        //catch (err) {
        //    ex.log(err, this.Name + ".CategoryItems(CategoryID:" + categoryID + ")");
        //}
    };

    //////////////////////////////////////////////////////////////////////////////////////////////////
    // NAME: categoryItems_Save()
    // DEFINE:  Refreshes the [CategoryItems] localStorageDB table with updated information.
    // SCOPE:   Private
    // PARAMETERS: data = [] of [CategoryItem]
    //////////////////////////////////////////////////////////////////////////////////////////////////
    function categoryItems_Save(data) {
        try {
            // STEP 2: Iterate through all of the PairiDetails and Insert them into the LocalDB.
            for (var i = 0; i < data.length; i++) {
                var categoryItem = data[i];

                // ToDo: Insert the CategoryItem Record into the LocalDB.
                console.log(categoryItem.CategoryID);
                console.log(categoryItem.ItemName);
                console.log(categoryItem.Price);
                console.log(categoryItem.Qty);
            }
        }
        catch (err) {
            ex.log(err, this.Name + ".pairingDetail_Save(Data:" + data + ")");
        }
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////
    // NAME: Currencies()
    // DEFINE:  Returns a list of all of the Currencies the airline accepts.
    //////////////////////////////////////////////////////////////////////////////////////////////////
    function Currencies () {
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
    // NAME: databaseRefresh()
    // DEFINE:  Refreshes the localStorageDB with the JSON results.
    //////////////////////////////////////////////////////////////////////////////////////////////////
    function databaseRefresh(results) {
        try {
            // STEP 1: Create the localStorageDB if it doesn't already exist.
            dbCreate()

            // STEP 2: Save all of the [Categories] records to the localStorageDB.
            categories_Save(results.Categories);

            // STEP 3: Save all of the [CategoryItems] records to the localStorageDB.
            // STEP 3a: Iterate through all of the [Pairing] records to get to the [PairingDetails]
            for (var i = 0; i < results.length; i++) {
                var category = data[i];

                // STEP 3b: Save all of the [PairingDetail] records for the current [Pairing]
                categoryItems_Save(category.Items);
            }
        }
        catch (err) {
            ex.log(err, this.Name + ".databaseRefresh()");
        }
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////
    // NAME: dbCreate()
    // SCOPE: Private
    // DEFINE:  Creates a HTML5 localStorage database.
    //////////////////////////////////////////////////////////////////////////////////////////////////
    function dbCreate() {
        try {
            /*** Creates a 2mb database ***/
            //db = window.openDatabase("Database", "1.0", "In-flight", 5 * 1024 * 1024);
            //db.transaction(createDB, dbErrorHandler, successDB)

            var createDB = function () { };
            var successDB = function () { };
        }
        catch (err) {
            ex.log(err, this.Name + ".dbCreate()");
        }
    }

    function dbErrorHandler(err) {
        ex.log(err, this.Name + ".dbErrorHandler()");
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////
    // NAME: find()
    // DEFINE:  Search all 'id's (or any other property), regardless of its depth in the object
    //////////////////////////////////////////////////////////////////////////////////////////////////
    function find (obj, key, val) {
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
    function FlightInstance (flightInstanceID) {
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
    function FlightInstances (status) {
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
    // NAME: ShopppingCart()
    // DEFINE:  Returns a JSON object of a ShoppingCart/Order with details
    //////////////////////////////////////////////////////////////////////////////////////////////////
    function ShopppingCart (shoppingCartID) {
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
    function ShopppingCartAddItem (shoppingCartID, itemId, qty) {
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
    function ShopppingCartRemoveItem (shoppingCartID, itemId, qty) {
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
    function Warehouses () {
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

    /*** Exposes all of the Public Methods of the object/class. ***/
    return {
        Categories: Categories,
        CategoryItems: CategoryItems,
        Currencies: Currencies,
        databaseRefresh: databaseRefresh,
        find: find,
        FlightInstance: FlightInstance,
        FlightInstances: FlightInstances,
        ShopppingCart: ShopppingCart,
        ShopppingCartAddItem: ShopppingCartAddItem,
        ShopppingCartRemoveItem: ShopppingCartRemoveItem,
        Warehouses: Warehouses
    }
}());