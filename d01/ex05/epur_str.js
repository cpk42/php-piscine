if (process.argv[2]) {
    var str = process.argv[2]
    var res = []
    str = str.split(' ')
    for (var i = 0; i < str.length; i++) {
        if (str[i]) {
            res.push(str[i])
        }
    }
    console.log(res.join(' '));
}
