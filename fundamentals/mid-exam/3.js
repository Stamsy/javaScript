function solve(input) {
    let paintingNumber = input.shift().split(" ").map(Number)
    while (input[0] !== "END") {
        let [command, ...rest] = input.shift().split(" ");
        switch (command) {
            case "Change":
                let paintNum = Number(rest[0])
                let newNum = Number(rest[1]);
                if (paintingNumber.includes(paintNum)) {
                    let index = paintingNumber.indexOf(paintNum)
                    paintingNumber[index] = newNum
                }
                break;

            case "Hide":
                let num = Number(rest[0]);
                if (paintingNumber.includes(num)) {
                    let i = paintingNumber.indexOf(num)
                    paintingNumber.splice(i, 1)
                }

                break;
            case "Switch":
                let switchOne = Number(rest[0]);
                let switchTwo = Number(rest[1]);
                if (paintingNumber.includes(switchOne) && paintingNumber.includes(switchTwo)) {
                    let one = paintingNumber.indexOf(switchOne);
                    let two = paintingNumber.indexOf(switchTwo);
                    paintingNumber.splice(one, 1, switchTwo);
                    paintingNumber.splice(two, 1, switchOne)
                }
                break;
            case "Insert":
                let indexOne = Number(rest[0]);
                let newone = Number(rest[1]);
                if (indexOne >= 0 && indexOne < paintingNumber.length) {
                    paintingNumber.splice(indexOne + 1, 0, newone)
                }
                break;
            case "Reverse":
                paintingNumber.reverse()
                break;
        }
    }
    console.log(paintingNumber.join(" "));
}
solve(["77 120 115 101 97 78 88 112 111 108 110",
"Switch 97 98",
"Hide 88",
"Change 120 117",
"END"])