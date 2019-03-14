const Greyjoy = require('./Greyjoy.js');

class Euron extends Greyjoy {
	constructor() {
		super()
	}
	announceMotto() {
		console.log(this._familyMotto);
	}
}

module.exports = Euron;
