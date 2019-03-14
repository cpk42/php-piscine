const House = require('./House.js');

class DrHouse extends House {
    diagnose() {
        console.log("It's not lupus !");
    }
}

house = new DrHouse();
house.introduce();
