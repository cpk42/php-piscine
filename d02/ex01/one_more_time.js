const yearRegExp = /^(19|20)\d{2}$/
const timeRegExp = /\d{1,2}:\d{1,2}:\d{2}$/
const argv = process.argv;
const argc = argv.length;
const months = {};
const days = {};

const main = () => {
  if (argc == 3) {
    checkDate(argv[2].split(' '));
  } else
    console.log('Usage: node one_more_time.js "DAY_OF_WEEK NUMBER_OF_DAY MONTH YEAR HOURS:MINUTES:SECONDS"');
}

const checkDate = (query) => {
  console.log(`In checkDate: [ ${query} ]`);

  if (query.length != 5)
    return false;
  else {
    if (!timeRegExp.test(query[4]))
    return false
    var month = getMonth(query);
    var day = getDay(query)
    var dayOfMonth = getDayOfMonth(query);
    var year = getYear(query);
    var hours = parseInt(query[4].substring(0, 2));
    var minutes = parseInt(query[4].substring(3, 5));
    var seconds = parseInt(query[4].substring(6, 8));

    console.log(day);
    console.log(dayOfMonth);
    console.log(month);
    console.log(year);
    console.log(hours);
    console.log(minutes);
    console.log(seconds);
(86400 * 12) + (2629743 * 11) + (43 * 31556926) + (12 * 3600) + (2 * 60)
    var date = new Date(day, dayOfMonth, month, year, hours, minutes, seconds)
    console.log(date);
  }
}

const getMonth = (query) => {
  var queryMonth = months[query[2].toLowerCase()];

  if (queryMonth)
    return queryMonth;
  else
    return undefined;
}

const getDay = (query) => {
  var queryDay = days[query[0].toLowerCase()];

  if (queryDay)
    return queryDay;
  else
    return undefined;
}

const getYear = (query) => {
  var year = query[3];

  if (yearRegExp.test(parseInt(year)))
    return year;
  else
    return undefined;
}

const getDayOfMonth = (query) => {
  var queryDay = query[1];

  if (Number.isInteger(parseInt(queryDay)) && parseInt(queryDay) <= 31 && parseInt(queryDay) >= 1)
    return queryDay;
  else
    return undefined;
}



const init = () => {
  months["janvier"] = 1;
  months["fevrier"] = 2;
  months["mars"] = 3;
  months["avril"] = 4;
  months["mai"] = 5;
  months["juin"] = 6;
  months["juillet"] = 7;
  months["aout"] = 8;
  months["septembre"] = 9;
  months["octobre"] = 10;
  months["novembre"] = 11;
  months["decembre"] = 12;

  days["lundi"] = 1;
  days["mardi"] = 2;
  days["mercredi"] = 3;
  days["jeudi"] = 4;
  days["vendredi"] = 5;
  days["samedi"] = 6;
  days["dimanche"] = 7;
}

init();
main();
//Day_of_the_week Number_of_day Month Year Hours:Minutes:Seconds
