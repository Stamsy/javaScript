function minNumber(input) {
    let index = 0;
    let command = input[index];
    index++;

    let minNum = Number.MAX_SAFE_INTEGER;

    while (command !== "Stop") {
        let num = Number(command);

        if (minNum > num) {
            minNum = num;
        }
        command = input[index];
        index++;
    }
    
    console.log(minNum)
}
minNumber(["100",
    "99",
    "80",
    "70",
    "Stop"])