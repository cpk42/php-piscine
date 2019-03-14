class Tyrion {
    sleepWith(name) {
        if (name.constructor.name == 'Jaime')
            console.log('Not even if I\'m drunk !');
        else if (name.constructor.name == 'Sansa')
            console.log('Let\'s do this.');
        else if (name.constructor.name == 'Cersei')
            console.log('Not even if I\'m drunk !');
    }
}

module.exports = Tyrion;
