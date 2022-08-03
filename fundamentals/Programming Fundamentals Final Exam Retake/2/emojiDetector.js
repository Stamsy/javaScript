function emojiDetector(input) {
    let pattern = /(::|\*\*)(?<emoji>[A-Z][a-z]{2,})\1/g
    let match;
    let coolNum = 1
    let machNum = /\d/g
    let cool = input[0].match(machNum)

    for (let i = 0; i < cool.length; i++) {
        coolNum *= cool[i]
    }
    console.log(`Cool threshold: ${coolNum}`);
    let foundEm = input[0].match(pattern).length
    console.log(`${foundEm} emojis found in the text. The cool ones are:`)

    while ((match = pattern.exec(input[0])) != null) {
        let emoji = match.groups["emoji"];
        let currentSum = 0
        for (let letter of emoji) {
            currentSum += letter.charCodeAt()
        }
        if (currentSum >= coolNum) {
            console.log(match[0]);
        }
    }

}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])