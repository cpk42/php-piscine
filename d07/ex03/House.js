class House {
    constructor() {
        if (new.target === House) {
            throw new Error('Cant create an abstract class!');
        }
    }
    introduce() {
        return `House ${this.getHouseName()} of ${this.getHouseSeat()} : \"${this.getHouseMotto()}\"`
    }
    getHouseName() {
        throw new Error('You have to implement the method getHouseName!');
    }
    getHouseSeat() {
        throw new Error('You have to implement the method getHouseSeat!');
    }
    getHouseMotto() {
        throw new Error('You have to implement the method getHouseMotto!');
    }
}

module.exports = House;
