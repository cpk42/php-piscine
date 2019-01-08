const argv = process.argv

const do_op = (x, op, y) => {
    switch (op) {
        case '+':
            console.log(x + y);
            break;
        case '-':
            console.log(eval(x - y));
            break;
        case '/':
            console.log(eval(x / y));
            break;
        case '%':
            console.log(eval(x % y));
            break;
        case '*':
            console.log(eval(x * y));
            break;
    }
}

const main = () => {
    if (argv.length == 5) {
        do_op(argv[2].trim(), argv[3].trim(), argv[4].trim())
    }
}

main()
