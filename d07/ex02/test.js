const Targaryen = require('./Targaryen.js');

class Viserys extends Targaryen {
}

class Daenerys extends Targaryen {
	resistsFire() {
		return true;
	}
}

viserys = new Viserys();
daenerys = new Daenerys();

console.log("Viserys " + viserys.getBurned());
console.log("Daenerys " + daenerys.getBurned());
