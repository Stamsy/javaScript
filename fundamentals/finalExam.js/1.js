function solve(input) {
    let password = input.shift()

    while (input[0] !== "Done") {
        let [command, ...rest] = input.shift().split(" ");
        switch (command) {
            case "Change":
                let char = rest[0];
                let replacemant = rest[1];
                while (password.includes(char)) {
                    password = password.replace(char, replacemant)
                }
                console.log(password);
                break;
            case "Includes":
                let subs = rest[0]
                if (password.includes(subs)) {
                    console.log("True");
                } else {
                    console.log("False");
                }
                break;
            case "End":
                let substring = rest[0]
                if (password.endsWith(substring)) {
                    console.log("True");
                } else {
                    console.log("False");
                }
                break;
            case "Uppercase":
                password = password.toUpperCase()
                console.log(password);
                break;
            case "FindIndex":
                let indexChar = rest[0];
                let index = password.indexOf(indexChar)
                console.log(index);
                break;
            case "Cut":
                let startIndex = Number(rest[0]);
                let count = Number(rest[1]);
                password = password.substring(startIndex, startIndex + count)
                console.log(password);
                break;
        }
    }
}
solve(["//Th1s 1s my str1ng!//",
    "Change 1 i",
    "Includes string",
    "End my",
    "Uppercase",
    "FindIndex I",
    "Cut 5 5",
    "Done"])
