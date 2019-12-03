let date = new Date();
function Car (name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10){
        this.name = name;
        this.model = model;
        this.year = year;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.fuelCapacity = fuelCapacity;
        this.fuelConsumption = fuelConsumption;
    }

Car.prototype.getFullName = function(){
        return this.name + " " +   this.model;
}

Car.prototype.getAge = function(){
        return (date.getFullYear() - this.year);
}

Car.prototype.changeColor = function(colorCar){
    if (colorCar === this.color){
        console.log("up to you");
    }else{
        this.color = colorCar;
        console.log(`Color change for ${this.color}` )
        }
}

Car.prototype.calculateWay = function(kilometers, fuel){
    let time = kilometers / this.maxSpeed;
    let allFuel = (kilometers/100)*this.fuelConsumption;
    let countRefuel = allFuel / this.fuelCapacity;
    console.log(
    `Your time on the road: ${time} hour(s)
    Your fuel on the road: ${allFuel} l`
    )
    if (fuel < 10 || (allFuel === fuel && allFuel<10)){
        console.log("REFUEL!!!");
    } else if (allFuel <= fuel){
        console.log("Good Luck!");
        } else if(fuel < allFuel && allFuel <= this.fuelCapacity){
            console.log(`Refuel: 1`)} else if (allFuel > this.fuelCapacity ){
                console.log(`Refuel: ${countRefuel}`);
            }     

}

function BMW(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10, cruizeControl){
    Car.call(this,name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
    this.cruizeControl = cruizeControl; 
}
BMW.prototype = Object.create(Car.prototype);
BMW.prototype.constructor = BMW;

function Audi(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10, camera){
    Car.call(this,name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
    this.camera = camera; 
}
Audi.prototype = Object.create(Car.prototype);
Audi.prototype.constructor = Audi;

function VW(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10, ledHeadlights){
    Car.call(this,name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
    this.ledHeadlights = ledHeadlights; 
}
VW.prototype = Object.create(Car.prototype);
VW.prototype.constructor = VW;

let car1 = new BMW("BMW", "X6", "2010", "grey", "220", 65,10, true );
let car2 = new Audi("Audi", "A8", "2015", "green", "240", "65", "12", true );
let car3 = new VW("VW", "Passat CC", "2019", "yellow", "230", "70", "9", true);
console.log(car1);
console.log(car1.getFullName());
car1.calculateWay("300", "55");
console.log(car2);
car2.changeColor("grey");
console.log(car2);
console.log(car3);
console.log(car3.getAge());
