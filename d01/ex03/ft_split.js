const ft_split = (str) => {
    var res = []
    str = str.split(' ')
    for (var i = 0; i < str.length; i++) {
        if (str[i]) {
            res.push(str[i])
        }
    }
    return (res.sort())
}
