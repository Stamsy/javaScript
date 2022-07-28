function secretChat(input) {
    let text = input.shift();

    while (input[0] != 'Reveal') {
        let tokens = input.shift().split(":|:");
        let command = tokens[0];

        switch (command) {
            case 'InsertSpace':
                let index = Number(tokens[1])
                text = text.substring(0, index) + " " + text.substring(index)
                console.log(text);
                break;

            case 'Reverse':
                let subst = tokens[1];
                let reverseSubst = subst.split("").reverse().join("")

                if (text.includes(subst)) {
                    let substL = Number(subst.length)
                    let startIndex = Number(text.indexOf(subst));
                    let endIndex = startIndex + substL
                    text = text.substring(0, startIndex) + text.substring(endIndex) + reverseSubst
                    console.log(text);
                } else {
                    console.log("error");

                }

                break;
            case 'ChangeAll':
                let substr = tokens[1];
                let replacement = tokens[2];
                while (text.includes(substr)) {
                    text = text.replace(substr, replacement)
                }
                console.log(text);
                break;
        }

    }
    console.log(`You have a new text message: ${text}`);
}
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
])