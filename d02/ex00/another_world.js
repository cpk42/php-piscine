const argv = process.argv;
const argc = argv.length;

const main = () => {
  if (argc >= 3) {
    var query = argv[2].split(' ');
    var output = [];

    for (var i in query) {
      if (query[i].length > 0)
        output.push(query[i])
    }
    output = output.join(' ')
    console.log(output);
  } else {
    console.log("Not enough arguments");
  }
}

main()
