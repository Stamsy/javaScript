function needForSpeed(input) {
  let number = Number(input.shift());
  let carObj = {}
  for (let i = 0; i < number; i++) {
    let tokens = input.shift().split("|");
    let cars = tokens[0];
    let mileage = Number(tokens[1]);
    let fuel = Number(tokens[2])
    carObj[cars] = {};
    carObj[cars].mileage = mileage;
    carObj[cars].fuel = fuel;

  }
  while (input[0] != "Stop") {
    let token = input.shift().split(" : ");
    let command = token[0];
    let car = token[1]
    switch (command) {
      case "Drive":
        let distance = Number(token[2]);
        let givenFuel = Number(token[3]);

        if (carObj.hasOwnProperty(car)) {
          if (givenFuel > carObj[car].fuel) {
            console.log(`Not enough fuel to make that ride`);
            break;
          }
          else {
            carObj[car].mileage += distance;
            carObj[car].fuel -= givenFuel;
            console.log(`${carObj[car]} driven for ${distance} kilometers. ${givenFuel} liters of fuel consumed.`);
          }
          if (carObj[car].mileage >= 100000) {
            delete carObj[car];
          }
        }
        
    break;
     case "Refuel":
    let fuel = Number(token[2]);
    
   carObj[car].fuel + fuel
   if(carObj[car].fuel > 75){
    carObj[car].fuel = 75;
    let currentFuel = 75 - carObj[car].fuel;
    console.log(`${car} refueled with ${currentFuel} liters`);
   }

    }


    break;

  //    case "Revert":
  //  break;

  //}
}
console.table(carObj);
}
needForSpeed([
  '3',
  'Audi A6|38000|62',
  'Mercedes CLS|11000|35',
  'Volkswagen Passat CC|45678|5',
  'Drive : Audi A6 : 543 : 47',
  'Drive : Mercedes CLS : 94 : 11',
  'Drive : Volkswagen Passat CC : 69 : 8',
  'Refuel : Audi A6 : 50',
  'Revert : Mercedes CLS : 500',
  'Revert : Audi A6 : 30000',
  'Stop'
])