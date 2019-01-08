var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

process.stdout.write('Enter a number: ')
rl.on('line', (line) => {
    if (line.length != 0 && !isNaN(line)) {
        if (line % 2 == 0)
            console.log(`The number ${line} is even`)
        else
            console.log(`The number ${line} is odd`);
    } else {
        console.log(`\'${line}\' is not a number`);
    }
    process.stdout.write('Enter a number: ')
})
