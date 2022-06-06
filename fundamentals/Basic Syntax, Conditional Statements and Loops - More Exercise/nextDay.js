function solve(year, month, day) {
    if (year < 10){
        year = Number(`190${year}`);
    } else if (year < 100) {
        year = Number(`19${year}`);
    } else {
        year = year
    }
    let newDay = day + 1;
    let newMonth = month;
    let newYear = year;
    if(month === 2 && newDay > 28){
       if (year % 4 === 0 && newDay > 29){
           newMonth += 1;
           newDay = 1;
       } else if (year % 4 !== 0){
        newMonth += 1;
        newDay = 1
       }
   }
   if(newDay > 31 && (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12)){
       newDay = 1;
       if (month === 12){
           newMonth = 1;
           newYear += 1
       }
       newMonth += 1;
   } else if (newDay > 30 && (month == 4 || month == 6 || month == 9 ||month ==  11)) {
       newDay = 1;
       newMonth += 1;
   } else {
       newDay = newDay;
   }
   console.log(`${newYear}-${newMonth}-${newDay}`)
}solve(2016, 9, 30)