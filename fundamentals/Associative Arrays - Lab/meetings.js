function meetings(arr) {
    let meeting = {};

    for (let days of arr) {
        let token = days.split(" ");
        let day = token[0];
        let name = token[1];

        if (meeting.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            meeting[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }
    for(let key in meeting){
        console.log(key,"->",meeting[key]);
    }
}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])