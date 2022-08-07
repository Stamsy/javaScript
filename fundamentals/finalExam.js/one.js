function decryptingCommands(input) {
    let string = input.shift();

    while (input[0] != "Finish") {
        let tokens = input.shift().split(" ");
        let command = tokens[0];
let total = 0;
        switch (command) {
            case "Replace":
            let currentChar = tokens[1];
            let newChar = tokens[2];
            while(string.includes(currentChar)){
               string = string.replace(currentChar,newChar)
                 }
                 console.log(string);

                break;

            case "Cut":
                let startIndex = Number(tokens[1]);
                let endIndex = Number(tokens[2]);
                if (startIndex >= 0 && startIndex < string.length && endIndex >= 0 && endIndex < string.length){
                string = string.substring(0, startIndex) + string.substring(endIndex+1);
                console.log(string);
                } else {
                    console.log(`Invalid indices!`);
                }
                break;
            case "Make":
                let caseName = tokens[1]
                if (caseName === "Upper") {
                    string = string.toUpperCase()
                    console.log(string);
                } else {
                    string = string.toLowerCase()
                    console.log(string);
                }
                break;
            case "Check":
                let word = tokens[1];
                if(string.includes(word)){
                    console.log(`Message contains ${word}`);
                } else{
                    console.log(`Message doesn't contain ${word}`);
                }

                break;
            case "Sum":
                let start = Number(tokens[1]);
                let end = Number(tokens[2]);
                if (start >= 0 && start < string.length && end >= 0 && end < string.length) {
                   sum = string.substring(start, end+1)
                   for (let letter of sum) {
                    total += letter.charCodeAt();
                   
                }
                console.log(total);
                } else{
                    console.log(`Invalid indices!`);
                }
                break;
        }
    }
    
}
decryptingCommands(["ILikeSoftUni",
    "Replace I We",
    "Make Upper",
    "Check SoftUni",
    "Sum 1 4",
    "Cut 1 4",
    "Finish"])