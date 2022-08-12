function passwordValidator(input) {
    let password = input.shift();

    while (input[0] !== "Complete") {
        let tokens = input.shift().split(" ");
        let command = tokens[0];

        switch (command) {
            case "Make":
                let toDo = tokens[1];
                let index = Number(tokens[2]);

                if (toDo === "Upper") {
                    let word = password.substring(index, index + 1)
                    let letter = password.substring(index, index + 1).toUpperCase()
                    password = password.replace(word, letter)
                    console.log(password);
                } else if (toDo === "Lower") {
                    let word = password.substring(index, index + 1)
                    let letter = password.substring(index, index + 1).toLowerCase()
                    password = password.replace(word, letter)
                    console.log(password);
                }
                break;
            case "Insert":
                let i = tokens[1];
                let letter = tokens[2];
                password = password.substring(0, i) + letter + password.substring(i,)
                console.log(password);
                
                break;
            case "Replace":
                let oldValue = tokens[1]
                let indexOne = (tokens[1]).charCodeAt(0)
                let el = Number(tokens[2])
                let sum = indexOne + el
                let newsymbol = String.fromCharCode(sum);
                password = password.split(oldValue).join(newsymbol)
                console.log(password);
                break;

            case "Validation":
                let nonChar = /\W/g;
                let upperCase = /[A-Z]/g;
                let lowerCase = /[a-z]/g;
                let digit = /\d/g;
                let matchNonchar = password.match(nonChar);
                let matchUpperCase = password.match(upperCase);
                let matchLowerCase = password.match(lowerCase);
                let matchDigit = password.match(digit);

                if (password.length < 8) {
                    console.log(`Password must be at least 8 characters long!`);
                }
                if (matchNonchar) {
                    console.log(`Password must consist only of letters, digits and _!`);
                }
                if (!matchUpperCase) {
                    console.log(`Password must consist at least one uppercase letter!`);
                }
                if (!matchLowerCase) {
                    console.log(`Password must consist at least one lowercase letter!`);
                }
                if (!matchDigit) {
                    console.log(`Password must consist at least one digit!`);
                }
        }
    }
}
passwordValidator(['123456789',
    'Insert 3 R',
    'Replace 5 15',
    'Validation',
    'Make Lower 3',
    'Complete'])
