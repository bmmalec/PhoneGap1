var ReportingEngine = function () {

    //////////////////////////////////////////////////////////////////////////////////////////////////
    // NAME: CategorySalesSummary()
    // DEFINE:  
    //////////////////////////////////////////////////////////////////////////////////////////////////
    this.CategorySalesSummary = function (flightInstanceID) {
        try {
            var flightInstance = da.FlightInstance(flightInstanceID);
            var retVal = {
                Title: "Category Sales Summary",
                FlightInstanceID: flightInstanceID,
                Origin: flightInstance.Origin,
                Dest: flightInstance.Dest,
                TailNumber: flightInstance.TailNumber,
                BarsetNumber: flightInstance.BarsetNumber,
                FlightDate: flightInstance.FlightDate,
                PAX: flightInstance.PAX
            };
            return retVal;
        }
        catch (err) {
            ex.Log(err, this.Name + ".CategorySalesSummary(FlightInstanceID:" + flightInstanceID + ")");
            return null;
        }
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////
    // NAME: ChangeDue()
    // DEFINE:  
    //////////////////////////////////////////////////////////////////////////////////////////////////
    this.ChangeDue = function (flightInstanceID) {
        try {
            var flightInstance = da.FlightInstance(flightInstanceID);
            var retVal = {
                Title: "Change Due",
                FlightInstanceID: flightInstanceID,
                Origin: flightInstance.Origin,
                Dest: flightInstance.Dest,
                TailNumber: flightInstance.TailNumber,
                BarsetNumber: flightInstance.BarsetNumber,
                FlightDate: flightInstance.FlightDate,
                PAX: flightInstance.PAX
            };
            return retVal;
        }
        catch (err) {
            ex.Log(err, this.Name + ".ChangeDue(FlightInstanceID:" + flightInstanceID + ")");
            return null;
        }
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////
    // NAME: ItemsSoldPAX()
    // DEFINE:  
    //////////////////////////////////////////////////////////////////////////////////////////////////
    this.ItemsSoldPAX = function (flightInstanceID) {
        try {
            var flightInstance = da.FlightInstance(flightInstanceID);
            var retVal = {
                Title: "Items Sold PAX",
                FlightInstanceID: flightInstanceID,
                Origin: flightInstance.Origin,
                Dest: flightInstance.Dest,
                TailNumber: flightInstance.TailNumber,
                BarsetNumber: flightInstance.BarsetNumber,
                FlightDate: flightInstance.FlightDate,
                PAX: flightInstance.PAX
            };
            return retVal;
        }
        catch (err) {
            ex.Log(err, this.Name + ".ItemsSoldPAX(FlightInstanceID:" + flightInstanceID + ")");
            return null;
        }
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////
    // NAME: Name()
    // DEFINE:  Returns the name of the object/class.
    //////////////////////////////////////////////////////////////////////////////////////////////////
    this.Name = "Reports"

    //////////////////////////////////////////////////////////////////////////////////////////////////
    // NAME: Payment()
    // DEFINE:  
    //////////////////////////////////////////////////////////////////////////////////////////////////
    this.Payment = function (flightInstanceID) {
        try {
            var flightInstance = da.FlightInstance(flightInstanceID);
            var retVal = {
                Title: "Payment",
                FlightInstanceID: flightInstanceID,
                Origin: flightInstance.Origin,
                Dest: flightInstance.Dest,
                TailNumber: flightInstance.TailNumber,
                BarsetNumber: flightInstance.BarsetNumber,
                FlightDate: flightInstance.FlightDate,
                PAX: flightInstance.PAX
            };
            return retVal;
        }
        catch (err) {
            ex.Log(err, this.Name + ".Payment(FlightInstanceID:" + flightInstanceID + ")");
            return null;
        }
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////
    // NAME: OutOfStockSummary()
    // DEFINE:  
    //////////////////////////////////////////////////////////////////////////////////////////////////
    this.OutOfStockSummary = function (flightInstanceID) {
        try {
            var flightInstance = da.FlightInstance(flightInstanceID);
            var retVal = {
                Title: "Out of Stock Summary",
                FlightInstanceID: flightInstanceID,
                Origin: flightInstance.Origin,
                Dest: flightInstance.Dest,
                TailNumber: flightInstance.TailNumber,
                BarsetNumber: flightInstance.BarsetNumber,
                FlightDate: flightInstance.FlightDate,
                PAX: flightInstance.PAX,
                Columns: ["Item", "Start Stock"],
                Rows: [
                    { ItemName: "A/C Model", Qty: 0 },
                    { ItemName: "Baguette", Qty: 0 },
                    { ItemName: "Bright Crystal", Qty: 0 },
                    { ItemName: "Bun/Ciabatta", Qty: 0 },
                    { ItemName: "Chopard Wish", Qty: 0 },
                    { ItemName: "CK Euphoria", Qty: 0 },
                    { ItemName: "Football Watch", Qty: 0 },
                    { ItemName: "Heart Bracelet", Qty: 0 },
                    { ItemName: "Hello K Fragr", Qty: 0 },
                    { ItemName: "Hello K Plush", Qty: 0 },
                    { ItemName: "Inflatable", Qty: 0 },
                    { ItemName: "Key Ring Set", Qty: 0 },
                    { ItemName: "Lady Coffret", Qty: 0 },
                    { ItemName: "Lady Million", Qty: 0 },
                    { ItemName: "Lamb Watch P", Qty: 0 },
                    { ItemName: "Lamb Watch W", Qty: 0 },
                    { ItemName: "Lanc Palette", Qty: 0 },
                    { ItemName: "Lancom Mascara", Qty: 0 },
                    { ItemName: "Lipstick Trio", Qty: 0 },
                    { ItemName: "Million Lashes", Qty: 0 },
                    { ItemName: "Mobile Charger", Qty: 0 },
                    { ItemName: "Money Box", Qty: 0 },
                    { ItemName: "Olym Keyring", Qty: 0 },
                    { ItemName: "One Million", Qty: 0 },
                    { ItemName: "P.Cardin Set", Qty: 0 },
                    { ItemName: "Paco Rabanne", Qty: 0 },
                    { ItemName: "Plush Aircraft", Qty: 0 },
                    { ItemName: "Rapp Watch W", Qty: 0 },
                    { ItemName: "Rapp Watch B", Qty: 0 },
                    { ItemName: "RC Plane", Qty: 0 },
                    { ItemName: "Sun Glasses", Qty: 0 },
                    { ItemName: "Teddy Bear", Qty: 0 },
                    { ItemName: "Travel Adaptor", Qty: 0 },
                    { ItemName: "Travel Speaker", Qty: 0 },
                    { ItemName: "Tresor inLove", Qty: 0 },
                    { ItemName: "Triangle Sandwich", Qty: 0 },
                    { ItemName: "Youth Code", Qty: 0 }
                ]
            };
            return retVal;
        }
        catch (err) {
            ex.Log(err, this.Name + ".OutOfStockSummary(FlightInstanceID:" + flightInstanceID + ")");
            return null;
        }
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////
    // NAME: SalesSummary()
    // DEFINE:  
    //////////////////////////////////////////////////////////////////////////////////////////////////
    this.SalesSummary = function (flightInstanceID) {
        try {
            var flightInstance = da.FlightInstance(flightInstanceID);
            var retVal = {
                Title: "Sales Summary",
                FlightInstanceID: flightInstanceID,
                Origin: flightInstance.Origin,
                Dest: flightInstance.Dest,
                TailNumber: flightInstance.TailNumber,
                BarsetNumber: flightInstance.BarsetNumber,
                FlightDate: flightInstance.FlightDate,
                PAX: flightInstance.PAX,
                Columns: ["Item Name", "Price", "Total"]
            };
            return retVal;
        }
        catch (err) {
            ex.Log(err, this.Name + ".SalesSummary(FlightInstanceID:" + flightInstanceID + ")");
            return null;
        }
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////
    // NAME: StockSummary()
    // DEFINE:  
    //////////////////////////////////////////////////////////////////////////////////////////////////
    this.StockSummary = function (flightInstanceID) {
        try {
            var flightInstance = da.FlightInstance(flightInstanceID);
            var retVal = {
                Title: "Stock Summary",
                FlightInstanceID: flightInstanceID,
                Origin: flightInstance.Origin,
                Dest: flightInstance.Dest,
                TailNumber: flightInstance.TailNumber,
                BarsetNumber: flightInstance.BarsetNumber,
                FlightDate: flightInstance.FlightDate,
                PAX: flightInstance.PAX,
                Columns: ["Item", "Opening Count", "Closing Count"],
                Rows: [
                    { ItemName: "Cappuccino", OpeningCount: 60, ClosingCount: 60 },
                    { ItemName: "Coffee", OpeningCount: 100, ClosingCount: 100 },
                    { ItemName: "Tea", OpeningCount: 60, ClosingCount: 60 },
                    { ItemName: "Hot Chocolate", OpeningCount: 60, ClosingCount: 60 },
                    { ItemName: "Decaffeinated Coffee", OpeningCount: 30, ClosingCount: 30 },
                    { ItemName: "Water Still", OpeningCount: 96, ClosingCount: 96 },
                    { ItemName: "Water Sparkling", OpeningCount: 42, ClosingCount: 42 },
                    { ItemName: "Coco Cola", OpeningCount: 20, ClosingCount: 20 },
                    { ItemName: "Spite", OpeningCount: 15, ClosingCount: 15 },
                    { ItemName: "Nestea", OpeningCount: 36, ClosingCount: 36 },
                    { ItemName: "Orange Juice", OpeningCount: 24, ClosingCount: 22 },
                    { ItemName: "Juice Vary", OpeningCount: 16, ClosingCount: 16 },
                    { ItemName: "Burn", OpeningCount: 18, ClosingCount: 18 },
                    { ItemName: "Beer", OpeningCount: 84, ClosingCount: 28 },
                    { ItemName: "White Wine", OpeningCount: 28, ClosingCount: 28 },
                    { ItemName: "Rum Bacardi", OpeningCount: 28, ClosingCount: 28 },
                    { ItemName: "Whiskey", OpeningCount: 28, ClosingCount: 28 },
                    { ItemName: "Vodka", OpeningCount: 28, ClosingCount: 28 },
                    { ItemName: "Red Wine", OpeningCount: 28, ClosingCount: 28 },
                    { ItemName: "Croissant", OpeningCount: 24, ClosingCount: 24 },
                    { ItemName: "Twix", OpeningCount: 60, ClosingCount: 60 },
                    { ItemName: "Peanuts", OpeningCount: 40, ClosingCount: 40 },
                    { ItemName: "Potato Chips", OpeningCount: 48, ClosingCount: 48 },
                    { ItemName: "Soup", OpeningCount: 24, ClosingCount: 24 },
                    { ItemName: "Baked R. Pizza", OpeningCount: 32, ClosingCount: 32 },
                    { ItemName: "M&Ms", OpeningCount: 20, ClosingCount: 20 },
                    { ItemName: "Snickers", OpeningCount: 60, ClosingCount: 60 },
                    { ItemName: "Triangle SW", OpeningCount: 0, ClosingCount: -3 },
                    { ItemName: "Baguette", OpeningCount: 0, ClosingCount: -1 },
                    { ItemName: "Bun/Ciabatta", OpeningCount: 0, ClosingCount: -1 },
                    { ItemName: "A/C Model", OpeningCount: 0, ClosingCount: -1 },
                    { ItemName: "Teddy Bear", OpeningCount: 0, ClosingCount: 0 },
                    { ItemName: "Inflatable", OpeningCount: 0, ClosingCount: 0 },
                    { ItemName: "Plush Aircraft", OpeningCount: 0, ClosingCount: 0 },
                    { ItemName: "Key Ring Set", OpeningCount: 0, ClosingCount: 0 },
                    { ItemName: "One Million", OpeningCount: 0, ClosingCount: 0 },
                    { ItemName: "Money Box", OpeningCount: 0, ClosingCount: 0 },
                    { ItemName: "Fun Plane Set", OpeningCount: 4, ClosingCount: 4 },
                    { ItemName: "Remote Control Plane", OpeningCount: 0, ClosingCount: 0 },
                    { ItemName: "Lady Million", OpeningCount: 0, ClosingCount: 0 },
                    { ItemName: "Sweet Wheels", OpeningCount: 5, ClosingCount: 5 },
                    { ItemName: "CK One Summer", OpeningCount: 2, ClosingCount: 2 },
                    { ItemName: "CK Euphoria", OpeningCount: 0, ClosingCount: 0 },
                    { ItemName: "Paco Rabanne", OpeningCount: 0, ClosingCount: 0 },
                    { ItemName: "Boss Sport", OpeningCount: 1, ClosingCount: 0 },
                    { ItemName: "Aqua Gio Set", OpeningCount: 2, ClosingCount: 2 },
                    { ItemName: "Bright Crystal", OpeningCount: 0, ClosingCount: 0 },
                    { ItemName: "Tresor in Love", OpeningCount: 0, ClosingCount: 0 },
                    { ItemName: "Lady Coffret", OpeningCount: 0, ClosingCount: 0 },
                    { ItemName: "Chopard Wish", OpeningCount: 0, ClosingCount: 0 },
                    { ItemName: "Lancom Mascara", OpeningCount: 0, ClosingCount: 0 },
                    { ItemName: "Lipstick Trio", OpeningCount: 0, ClosingCount: 0 },
                    { ItemName: "Lanc Palette", OpeningCount: 0, ClosingCount: 0 },
                    { ItemName: "Star Bronzer", OpeningCount: 0, ClosingCount: 0 },
                    { ItemName: "Million Lashes", OpeningCount: 0, ClosingCount: 0 },
                    { ItemName: "Youth Code", OpeningCount: 0, ClosingCount: 0 },
                    { ItemName: "Lamb Watch W.", OpeningCount: 0, ClosingCount: 0 },
                    { ItemName: "Lamb Watch P.", OpeningCount: 0, ClosingCount: 0 },
                    { ItemName: "Rapp Watch W.", OpeningCount: 0, ClosingCount: 0 },
                    { ItemName: "Rapp Watch B.", OpeningCount: 0, ClosingCount: 0 },
                    { ItemName: "P. Cardin Set", OpeningCount: 0, ClosingCount: 0 },
                    { ItemName: "Heart Bracelet", OpeningCount: 0, ClosingCount: 0 },
                    { ItemName: "Hello K. Plush", OpeningCount: 0, ClosingCount: 0 },
                    { ItemName: "Hello K. Fragr", OpeningCount: 0, ClosingCount: 0 },
                    { ItemName: "Football Watch", OpeningCount: 0, ClosingCount: 0 },
                    { ItemName: "Brick Game", OpeningCount: 1, ClosingCount: 0 },
                    { ItemName: "Sunglasses", OpeningCount: 0, ClosingCount: 0 },
                    { ItemName: "Travel Adapter", OpeningCount: 0, ClosingCount: 0 },
                    { ItemName: "Travel Speakers", OpeningCount: 0, ClosingCount: 0 },
                    { ItemName: "Olympic Key ring", OpeningCount: 0, ClosingCount: 0 },
                    { ItemName: "Mobile Charger", OpeningCount: 0, ClosingCount: 0 }
                ]
            };
            return retVal;
        }
        catch (err) {
            ex.Log(err, this.Name + ".StockSummary(FlightInstanceID:" + flightInstanceID + ")");
            return null;
        }
    }
}

// Global Variable
Reports = new ReportingEngine();