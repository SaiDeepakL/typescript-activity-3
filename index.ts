

export class HotelRoom {
  protected hotelName: string;
  protected numberOfSqFeet:number;
  protected hasTV:boolean;
  protected hasWifi:boolean;
  protected hasTVBoolean:string;
  protected hasWifiBoolean:string;

  constructor(hotelName:string,numberOfSqFeet:number,hasTV:boolean,hasWifi:boolean){
    this.hotelName=hotelName;
    this.numberOfSqFeet=numberOfSqFeet;
    this.hasTV=hasTV;
    this.hasWifi=hasWifi;
  }
  
  public calculateTariff(): number {
      let costPerSqFeet = this.getRatePerSqFeet();
      return this.numberOfSqFeet*costPerSqFeet;
  }

  public getRatePerSqFeet(): number{
    return 0;
  }

  public displayOutput(){
    if(this.hasTV==true)
      this.hasTVBoolean="Yes";
    else
      this.hasTVBoolean="No";

    if(this.hasWifi ==true)
      this.hasWifiBoolean="Yes";
    else
      this.hasWifiBoolean="No";
    
      console.log("\n Hotel Name:"+this.hotelName+" \n Room Square Feet Area: "+this.numberOfSqFeet+" \n Room has TV (yes/no):"+this.hasTVBoolean+" \n Room has Wifi (yes/no):"+this.hasWifiBoolean+" \n Room Tariff per day is:"+this.calculateTariff());
  }
}

export class DeluxeRoom extends HotelRoom {
  protected ratePerSqFeet: number;

  constructor(){
    super("Taj",3200,true,true);
    this.ratePerSqFeet=10;
  }

  public getRatePerSqFeet(): number{
    if(this.hasWifi == true)
      return (this.ratePerSqFeet+2);
    else
      return this.ratePerSqFeet;
  }
}

export class DeluxeACRoom extends DeluxeRoom {
  constructor(){
    super();
    this.ratePerSqFeet=12;
  }
}

export class SuiteACRoom extends HotelRoom {
  private ratePerSqFeet:number;

  constructor(){
    super("Taj",3200,true,true);
    this.ratePerSqFeet=15;
  }

  public getRatePerSqFeet(): number{
    if(this.hasWifi == true)
      return (this.ratePerSqFeet+2);
    else
      return this.ratePerSqFeet;
  }
}

var dr = new DeluxeRoom(),
drAC = new DeluxeACRoom(),
suiteAC = new SuiteACRoom();


function hotelTariffCalculator(){
  let promptSync = require('prompt-sync')();
 
  let inputValue = promptSync('Hotel Tariff Calculator \n 1 Deluxe Room \n 2 Deluxe AC Room \n 3 Suite AC Room \n Select Room Type:');
  if(inputValue == "1"){
    console.log("For Deluxe Room:");
    dr.displayOutput();
  }
  else if(inputValue == "2"){
    console.log("For Deluxe AC Room:");
    drAC.displayOutput();
  }
  else if(inputValue == "3"){
    console.log("For Suite AC Room:");
    suiteAC.displayOutput();
  }
  else{
    console.log("Please enter a valid option");
  }
}

hotelTariffCalculator();





