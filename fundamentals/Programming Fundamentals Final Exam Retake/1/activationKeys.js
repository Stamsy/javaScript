function activationKeys(input) {
    let rawKey = input.shift()

    while (input[0] != "Generate") {
        let tokens = input.shift().split(">>>");
        let command = tokens[0];
        let p1 = tokens[1];
        let p2 = tokens[2];
        let p3 = tokens[3];
        switch (command) {
            case "Contains":
                if (rawKey.includes(p1)) {
                    console.log(`${rawKey} contains ${p1}`);
                } else {
                    console.log(`Substring not found!`);
                }
                break;

            case "Flip":
                let caseName = p1
                p2 = Number(p2);
                p3 = Number(p3)
                let newText = rawKey.substring(p2, p3)
                if (caseName === "Upper") {
                    newText = newText.toUpperCase()

                    rawKey = rawKey.substring(0, p2) + newText + rawKey.substring(p3)
                    console.log(rawKey);
                } else {
                    newText = newText.toLowerCase()

                    rawKey = rawKey.substring(0, p2) + newText + rawKey.substring(p3)
                    console.log(rawKey);
                }
                break;
            case "Slice":
                p1 = Number(p1)
                p2 = Number(p2)
                rawKey = rawKey.substring(0, p1) + rawKey.substring(p2);
                console.log(rawKey);
                break;
        }
    }
    console.log(`Your activation key is: ${rawKey}`);
}
activationKeys(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])