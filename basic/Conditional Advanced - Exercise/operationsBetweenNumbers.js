function OperationsBetweenNumbers(input) {
    let N1 = Number(input[0]);
    let N2 = Number(input[1]);
    let operator = input[2];

    let count;

    if (operator === "+") {
        if ((N1 + N2) % 2 === 0) {
            count = "even";
        } else {
            count = "odd";
        }
        console.log(`${N1} ${operator} ${N2} = ${N1 + N2} - ${count}`)
    } else if (operator === "-") {
        if ((N1 - N2) % 2 === 0) {
            count = "even";
        } else {
            count = "odd";
        }
        console.log(`${N1} ${operator} ${N2} = ${N1 - N2} - ${count}`)
    } else if (operator === "*") {
        if ((N1 * N2) % 2 === 0) {
            count = "even";
        } else {
            count = "odd";
        }
        console.log(`${N1} ${operator} ${N2} = ${N1 * N2} - ${count}`)
    } else if (operator === "/") {
        switch (N2) {
            case 0: console.log(`Cannot divide ${N1} by zero`); break;
            default: console.log(`${N1} ${operator} ${N2} = ${(N1 / N2).toFixed(2)} `); break;
        }
    } else if (operator === "%") {
        switch (N2) {
            case 0: console.log(`Cannot divide ${N1} by zero`); break;
            default: console.log(`${N1} ${operator} ${N2} = ${N1 % N2}`); break;
        }
    }
}



OperationsBetweenNumbers (["10",
"3",
"%"])
