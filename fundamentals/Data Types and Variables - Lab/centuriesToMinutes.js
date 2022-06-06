function centuriesToMinutes(num) {
    let years = num*100;
    let days = Math.trunc(years*365.2422);
    let hours = 24*days;
    let minutes = 60* hours;

    console.log(`${num} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);

}
centuriesToMinutes(5)