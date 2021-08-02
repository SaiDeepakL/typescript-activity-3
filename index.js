"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.SuiteACRoom = exports.DeluxeACRoom = exports.DeluxeRoom = exports.HotelRoom = void 0;
var HotelRoom = /** @class */ (function () {
    function HotelRoom(hotelName, numberOfSqFeet, hasTV, hasWifi) {
        this.hotelName = hotelName;
        this.numberOfSqFeet = numberOfSqFeet;
        this.hasTV = hasTV;
        this.hasWifi = hasWifi;
    }
    HotelRoom.prototype.calculateTariff = function () {
        var costPerSqFeet = this.getRatePerSqFeet();
        return this.numberOfSqFeet * costPerSqFeet;
    };
    HotelRoom.prototype.getRatePerSqFeet = function () {
        return 0;
    };
    HotelRoom.prototype.displayOutput = function () {
        if (this.hasTV == true)
            this.hasTVBoolean = "Yes";
        else
            this.hasTVBoolean = "No";
        if (this.hasWifi == true)
            this.hasWifiBoolean = "Yes";
        else
            this.hasWifiBoolean = "No";
        console.log("\n Hotel Name:" + this.hotelName + " \n Room Square Feet Area: " + this.numberOfSqFeet + " \n Room has TV (yes/no):" + this.hasTVBoolean + " \n Room has Wifi (yes/no):" + this.hasWifiBoolean + " \n Room Tariff per day is:" + this.calculateTariff());
    };
    return HotelRoom;
}());
exports.HotelRoom = HotelRoom;
var DeluxeRoom = /** @class */ (function (_super) {
    __extends(DeluxeRoom, _super);
    function DeluxeRoom() {
        var _this = _super.call(this, "Taj", 3200, true, true) || this;
        _this.ratePerSqFeet = 10;
        return _this;
    }
    DeluxeRoom.prototype.getRatePerSqFeet = function () {
        if (this.hasWifi == true)
            return (this.ratePerSqFeet + 2);
        else
            return this.ratePerSqFeet;
    };
    return DeluxeRoom;
}(HotelRoom));
exports.DeluxeRoom = DeluxeRoom;
var DeluxeACRoom = /** @class */ (function (_super) {
    __extends(DeluxeACRoom, _super);
    function DeluxeACRoom() {
        var _this = _super.call(this) || this;
        _this.ratePerSqFeet = 12;
        return _this;
    }
    return DeluxeACRoom;
}(DeluxeRoom));
exports.DeluxeACRoom = DeluxeACRoom;
var SuiteACRoom = /** @class */ (function (_super) {
    __extends(SuiteACRoom, _super);
    function SuiteACRoom() {
        var _this = _super.call(this, "Taj", 3200, true, true) || this;
        _this.ratePerSqFeet = 15;
        return _this;
    }
    SuiteACRoom.prototype.getRatePerSqFeet = function () {
        if (this.hasWifi == true)
            return (this.ratePerSqFeet + 2);
        else
            return this.ratePerSqFeet;
    };
    return SuiteACRoom;
}(HotelRoom));
exports.SuiteACRoom = SuiteACRoom;
var dr = new DeluxeRoom(), drAC = new DeluxeACRoom(), suiteAC = new SuiteACRoom();
//console.log("Hotel Tariff Calculator \n 1 Deluxe Room \n 2 Deluxe AC Room \n 3 Suite AC Room \n Select Room Type:");
function hotelTariffCalculator() {
    var promptSync = require('prompt-sync')();
    var inputValue = promptSync('Hotel Tariff Calculator \n 1 Deluxe Room \n 2 Deluxe AC Room \n 3 Suite AC Room \n Select Room Type:');
    if (inputValue == "1") {
        console.log("For Deluxe Room:");
        dr.displayOutput();
    }
    else if (inputValue == "2") {
        console.log("For Deluxe AC Room:");
        drAC.displayOutput();
    }
    else if (inputValue == "3") {
        console.log("For Suite AC Room:");
        suiteAC.displayOutput();
    }
    else {
        console.log("Please enter a valid option");
    }
}
hotelTariffCalculator();
