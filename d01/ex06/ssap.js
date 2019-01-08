const argv = process.argv

if (argv[2]) {
    var res = []
    for (var i = 2; i < argv.length; i++) {
        var split = argv[i].split(' ')
        for (var x = 0; x < split.length; x++) {
            if (split[x])
                res.push(split[x])
        }
    }
    console.log(res.sort());
}
