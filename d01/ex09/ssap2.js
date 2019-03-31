const argv = process.argv

const splitArgs = () => {
    var res = []
    for (var i = 2; i < argv.length; i++) {
        var split = argv[i].split(' ')
        for (var x = 0; x < split.length; x++) {
            res.push(split[x])
        }
    }
    return res;
}

const isAlpha = (s) => {
    if (s[0] >= 'a' && s[0] <= 'z' ||
        s[0] >= 'A' && s[0] <= 'Z') {
        return true;
    }
    return false;
}

const isSorted = (arr) => {
    for (var i = 1; i < arr.length; i++) {
        if (!isNaN(arr[i])) {
            if (isNaN(arr[i - 1])) {
                return false;
            }
        }
    }
    return true;
}
const alphaSort = (arr) => {
    var swap;

    while (!isSorted(arr)) {
        for (var i = 1; i < arr.length; i++) {
            if (!isNaN(arr[i]) && isNaN(arr[i - 1])) {
                swap = arr[i]
                arr[i] = arr[i - 1]
                arr[i - 1] = swap
            }
            else if (arr[i] <= arr[i - 1]) {
                swap = arr[i]
                arr[i] = arr[i - 1]
                arr[i - 1] = swap
            }
        }
    }
    return arr;
}

const main = () => {
    if (argv[2]) {
        var res = splitArgs()
        var alpha = []
        var other = []

        for (var i = 0; i < res.length; i++) {
            if (!isAlpha(res[i])) {
                other.push(res[i])
            } else {
                alpha.push(res[i])
            }
        }
        alpha = alpha.sort(function(a, b) {
            return a.toLowerCase().localeCompare(b.toLowerCase())
        });
        other = alphaSort(other.sort())
        for (var i = 0; i < alpha.length; i++) {
            console.log(alpha[i])
        }
        for (var i = 0; i < other.length; i++) {
            console.log(other[i]);
        }
    }
}

main();
