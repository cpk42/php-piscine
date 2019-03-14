class Jaime {
    sleepWith(name) {
        if (name.constructor.name == 'Tyrion')
            console.log('Not even if I\'m drunk !');
        else if (name.constructor.name == 'Sansa')
            console.log('Let\'s do this.');
        else if (name.constructor.name == 'Cersei')
            console.log('With pleasure, but only in a tower in Winterfell, then.');
    }
}

module.exports = Jaime;
