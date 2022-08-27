function solve(argument) {
    let type = typeof argument
    if (type === "number") {
        let area = Math.PI * argument * argument;
        console.log(area.toFixed(2));
    } else {

        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }
}
solve(5);
console.log(`..............................`);
solve('name')