const argv = process.argv
var argc = process.argv.length

if (argv[2]) {
    var str = argv[2].split(' ')
    var held = str[0]
    argc += str.length
    str.splice(0, 1)
    process.stdout.write(`${str.join(' ')}${argc == 4 ? '' : ' '}${held}\n`);
}
