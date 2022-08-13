function stringManipulator(input) {
    let text = input.shift();

    while (input[0] !== "End") {
        let [command, ...rest] = input.shift().split(" ");

        switch (command) {
            case "Translate":
                let char = rest[0];
                let replacmant = rest[1];
                text = text.split(char).join(replacmant);
                console.log(text);
                break;

            case "Includes":
                let substr = rest[0];
                if (text.includes(substr)) {
                    console.log("True");
                } else {
                    console.log("False");
                }
                break;
            case "Start":
                let subs = rest[0];

                if (text.startsWith(subs)) {
                    console.log("True");
                } else {
                    console.log("False");
                }
                break;
            case "Lowercase":
                text = text.toLowerCase();
                console.log(text);
                break;
            case "FindIndex":
                let lastChar = rest[0];
                let indexLastChar = text.lastIndexOf(lastChar)
                console.log(indexLastChar);
                break;
            case "Remove":
                let startIndex = Number(rest[0]);
                let count = Number(rest[1]);
                let second = startIndex + count
                text = text.substring(0,startIndex) + text.substring(second);
                console.log(text);

                break;
        }
    }
}
stringManipulator([
    "//Thi5 I5 MY 5trING!//",
    "Translate 5 s",
    "Includes string",
    "Start //This",
    "Lowercase",
    "FindIndex i",
    "Remove 0 10",
    "End"
]);