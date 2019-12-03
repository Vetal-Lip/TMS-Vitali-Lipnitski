let date = new Date();
class Car{
    constructor(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10){
        this.name = name;
        this.model = model;
        this.year = year;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.fuelCapacity = fuelCapacity;
        this.fuelConsumption = fuelConsumption;

    }

    getFullName = () => this.name + " " +   this.model;
          
    getAge = () => (date.getFullYear() - this.year);
    
    changeColor(colorCar){
        if (colorCar === this.color){
            alert("up to you");
        }else{
          this.color = colorCar;
          alert(`Color change for ${this.color}` )
        }
        // return this.color;
    }

    calculateWay(kilometers, fuel){
        let time = kilometers / this.maxSpeed;
        let allFuel = (kilometers/100)*this.fuelConsumption;
        let countRefuel = allFuel / this.fuelCapacity;
        alert(
        `Your time on the road: ${time} hour(s)
        Your fuel on the road: ${allFuel} l`
        )
        if (fuel < 10 || (allFuel === fuel && allFuel<10)){
            alert("REFUEL!!!");
        } else if (allFuel <= fuel){
            alert("Good Luck!");
            } else if(fuel < allFuel && allFuel <= this.fuelCapacity){
                alert(`Refuel: 1`)} else if (allFuel > this.fuelCapacity ){
                    alert(`Refuel: ${countRefuel}`);
                }     
    }

}

class BMW extends Car{
    cruizeControl = true;
    getMaxSpeed = () => console.log(this.maxSpeed);
    getFullName = () => this.name + " " +   this.model + ' ' + this.year;
}

class Audi extends Car{
    camera = true;
    getColorCar = () => console.log(this.color);
    
}

class VW extends Car{
    ledHeadlights = true;
    getTime = () => console.log(date.getHours() + ':' + date.getMinutes());
    
}

let car1 = new BMW("BMW", "X6", "2010", "grey", "220", "11");
let car2 = new Audi("Audi", "A8", "2015", "green", "240", "65", "12");
let car3 = new VW("VW", "Passat CC", "2019", "yellow", "230", "70", "9");


console.log(car1);
car1.getMaxSpeed();
console.log(car1.getFullName());
console.log(car2);
car2.getColorCar();
console.log(car3);
car3.getTime();

