function cinema(input) {
    let index =0;
    let freeSpace = Number(input[index]);
    index++
    let command = input[index];
    index++
    let countPeople = 0;
    let totalCounterPeople = 0;
    let income = 0;
    let totalIncome = 0;
    let isFull = false;

         while (command !== "Movie time!") {
            countPeople = Number(command);
            totalCounterPeople += countPeople;
            income = countPeople * 5;
            totalIncome += income;

            if (countPeople % 3 === 0) {
                totalIncome -= 5;
            }
         
            if (totalCounterPeople > freeSpace) {
                console.log(`The cinema is full.`);
                console.log(`Cinema income - ${totalIncome} lv.`)
                break;}
               
                command = input[index];
                index++
            }if(isFull){
                console.log(`There are ${freeSpace - totalCounterPeople} seats left in the cinema.`)
                 console.log(`Cinema income - ${totalIncome} lv.`)
    }
}
cinema(["50",
    "15",
    "10",
    "10",
    "15",
    "5"])
