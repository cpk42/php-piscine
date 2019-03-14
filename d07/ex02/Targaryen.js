class Targaryen {
    getBurned() {
        if (this.resistsFire())
            return "emerges maked but unharmed";
        return "burns alive";
    }
    resistsFire() {
        return false;
    }
}

module.exports = Targaryen;
