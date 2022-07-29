function passwordReset(input) {
    let text = input.shift();
    let oddText = []

    while (input[0] != "Done") {
        let command = input.shift()

        if (command === "TakeOdd") {
            for (let i = 0; i < text.length; i++) {
                if (i % 2 !== 0) {
                    oddText.push(text[i])
                }
            }
            oddText = oddText.join("")
            console.log(oddText);
        }
        if (command.includes("Cut")) {
            let tokens = command.split(" ");
            let nameCommand = tokens[0]
            let index = Number(tokens[1]);
            let length = Number(tokens[2]);
            oddText = oddText.substring(0, index) + oddText.substring(index + length);
            console.log(oddText);

        }
        if (command.includes("Substitute")) {
            let tokenTwo = command.split(" ");
            let name = tokenTwo[0];
            let subst = tokenTwo[1];
            let substitute = tokenTwo[2];
            if (!oddText.includes(subst)) {
                console.log(`Nothing to replace!`);
                break;
            }
            while (oddText.includes(subst)) {
                oddText = oddText.replace(subst, substitute);
            }
            if (oddText.includes(substitute)) {
                console.log(oddText);
            }

        }
    }
    console.log(`Your password is: ${oddText}`);
}
passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"])