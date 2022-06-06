function onTime(input) {
    examHour = Number(input[0]);
    examMin = Number(input[1]);
    arrivalHour = Number(input[2]);
    arrivalMin = Number(input[3]);
 
    let totalExamMin = examHour * 60 + examMin;
    let totalArrivalMin = arrivalHour * 60 + arrivalMin;
 
    let difference = Math.abs(totalArrivalMin - totalExamMin);
    let hourDiff = Math.floor(difference / 60);
    let minDiff = difference % 60;
    if (minDiff === 0 || (minDiff < 10 && hourDiff > 0)) {
        minDiff = `0${minDiff}`;
    }
 
    if (totalArrivalMin === totalExamMin){
        console.log('On time');
    } else if ((totalArrivalMin > totalExamMin) && (difference < 60)) {
        console.log('Late');
        console.log(`${minDiff} minutes after the start`);
    } else if ((totalArrivalMin > totalExamMin) && (difference >= 60)) {
        console.log('Late');
        console.log(`${hourDiff}:${minDiff} hours after the start`);
    } else if (difference <= 30) {
        console.log('On time');
        console.log(`${minDiff} minutes before the start`);
    } else if (difference > 30 && difference < 60) {
        console.log('Early');
        console.log(`${minDiff} minutes before the start`);
    } else {
        console.log('Early');
        console.log(`${hourDiff}:${minDiff} hours before the start`);
    }
 
}
onTime (["9","30","9","50"])