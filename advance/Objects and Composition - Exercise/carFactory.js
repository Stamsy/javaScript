function solve(car) {
    let resultCar = {};
    let engine = {};
    let carriage = {};

    resultCar.model = car.model;

    if (car.power <= 90) {
        engine.power = 90;
        engine.volume = 1800;
    } else if (car.power <= 120) {
        engine.power = 120;
        engine.volume = 2400;
    } else if (car.power <= 200) {
        engine.power = 200;
        engine.volume = 3500;
    }
    carriage.type = car.carriage;
    carriage.color = car.color;

    if (car.wheelsize % 2 === 0) {
        car.wheelsize--
    }
    resultCar.engine = engine;
    resultCar.carriage = carriage;
    resultCar.wheels = [car.wheelsize, car.wheelsize, car.wheelsize, car.wheelsize];

    return resultCar;
}
solve( {
    model: 'Ferrari',
    power: 200,
    color: 'red',
    carriage: 'coupe',
    wheelsize: 21
})