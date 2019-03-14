const House = require('./House.js');

class HouseStark extends House {
    getHouseName() {
        return "Stark";
    }
    getHouseMotto() {
        return "Winter is coming";
    }
    getHouseSeat() {
        return "Winterfell";
    }
}

class HouseMartell extends House {
    getHouseName() {
        return "Martell";
    }
    getHouseMotto() {
        return "Unbowed, Unbent, Unbroken";
    }
    getHouseSeat() {
        return "Sunspear";
    }
}

houses = Array(new HouseStark(), new HouseMartell());

console.log(houses[0].introduce());
console.log(houses[1].introduce());
