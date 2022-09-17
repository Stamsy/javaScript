function previousDay(year, month, day) {
    const newDay = new Date(year, month - 1, day);
    const prevDay = new Date(newDay.getTime() - 1);
    console.log(prevDay.getFullYear() + '-' + (prevDay.getMonth()+1) + '-' + prevDay.getDate());
}
previousDay(2016, 9, 30);
previousDay(2016, 10, 1);