function memoryGame(input) {
    let elements = input.shift().split(" ").map(x => Number(x));

    input.pop();
    let integers = input.shift().split(" ").map(x => Number(x));
    index = 0;
    let command = input[index];
    while(command !== "end"){
        let compareOne = elements[index];
        index++
        let compareTwo = elements[index];
        for (let j = 0; j < integers.length; j++) {
            let numOne = integers[j];
            let numTwo = integers[j+1];

            if (compareOne == numOne) {
                input.shift()
                console.log(`Congrats! You have found matching elements - ${compareOne}!`);

            }
            if (compareOne != numOne && compareTwo != numTwo) {
                console.log(`Try again!`);
            }
        }

    }



}
memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
])