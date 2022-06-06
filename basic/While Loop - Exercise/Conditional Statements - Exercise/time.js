function time(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]) + 15;

    if (minutes >=60) {
        hours = hours + 1;
        minutes = minutes - 60;
    }
    if (hours > 23) {
        hours = hours - 24;
    }
    if (minutes < 10)
        console.log(`${hours}:0${minutes}`)
    else {
        console.log(`${hours}:${minutes}`)
    }

}
time(["23", "45"])