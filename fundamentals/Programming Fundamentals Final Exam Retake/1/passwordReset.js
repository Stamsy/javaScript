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
            text = oddText.join("")
            
            console.log(text);
        }
        if (command.includes("Cut")) {
            let tokens = command.split(" ");
            let nameCommand = tokens[0]
            let index = Number(tokens[1]);
            let length = Number(tokens[2]);
            text = text.substring(0, index) + text.substring(index + length);
            console.log(text);

        }
        if (command.includes("Substitute")) {
            let tokenTwo = command.split(" ");
            let name = tokenTwo[0];
            let subst = tokenTwo[1];
            let substitute = tokenTwo[2];
            if (!text.includes(subst)) {
                console.log(`Nothing to replace!`);
                break;
            }
            while (text.includes(subst)) {
                text = text.replace(subst, substitute);
            }
            if (text.includes(substitute)) {
                console.log(text);
            }

        }
    }
   
    console.log(`Your password is: ${text}`);
}
passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"])