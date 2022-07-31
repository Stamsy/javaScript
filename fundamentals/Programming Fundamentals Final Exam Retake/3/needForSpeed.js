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
            console.log(`${car} driven for ${distance} kilometers. ${givenFuel} liters of fuel consumed.`);
          }
          if (carObj[car].mileage >= 100000) {
            delete carObj[car];
            console.log(`Time to sell the ${car}!`);
          }
        }

        break;
      case "Refuel":
        let fuel = Number(token[2]);

        carObj[car].fuel += fuel
        let currentFuel = carObj[car].fuel - 75;
        if (carObj[car].fuel > 75) {
          carObj[car].fuel = 75;
          
        console.log(`${car} refueled with ${currentFuel} liters`);
        } else{
          console.log(`${car} refueled with ${fuel} liters`);
        }
        break;

      case "Revert":
        let kilometers = Number(token[2]);
        carObj[car].mileage -= kilometers;
        if (carObj[car].mileage < 10000) {
          carObj[car].mileage = 10000
          break;
        }
        console.log(`${car} mileage decreased by ${kilometers} kilometers`);

        break;
    }

  }

  for (let key in carObj) {
    console.log(`${key} -> Mileage: ${carObj[key].mileage} kms, Fuel in the tank: ${carObj[key].fuel} lt.`);
  }

}
needForSpeed([
  '4',
  'Lamborghini Veneno|11111|74',
  'Bugatti Veyron|12345|67',
  'Koenigsegg CCXR|67890|12',
  'Aston Martin Valkryie|99900|50',
  'Drive : Koenigsegg CCXR : 382 : 82',
  'Drive : Aston Martin Valkryie : 99 : 23',
  'Drive : Aston Martin Valkryie : 2 : 1',
  'Refuel : Lamborghini Veneno : 40',
  'Revert : Bugatti Veyron : 2000',
  'Stop'
])
