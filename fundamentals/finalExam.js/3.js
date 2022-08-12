function solve(input) {
    let dictionary = input.shift().split(" | ");
    let testWords = input.shift().split(" | ");
    let comamnd = input.pop()
    let obj = {}

    for (let i = 0; i <= dictionary.length; i++) {
        let [name, text] = dictionary.shift().split(": ");

        if (!obj.hasOwnProperty(name)) {
            obj[name] = new Set()
        }
        obj[name].add(text)
    }
    if (comamnd === "Test") {

        for (let word of testWords) {
            if (obj.hasOwnProperty(word)) {
                console.log(`${word}:`);
                for (let text of obj[word]) {
                    console.log(`-${text}`);
                }

            }
        }
    } else {
        let keys = Object.keys(obj)
        for (let word of keys) {
            console.log(word.join(", "));
        }
    }


}
solve(["tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance",
    "bit | code | tackle",
    "Test"])