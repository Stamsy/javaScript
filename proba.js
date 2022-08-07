function emojiDetector(input) {
 
    let patternWord = /(::|\*\*)([A-Z][a-z][a-z]+)\1/g;
    let patternDigits = /\d/g;
    let result = [];
    let total = 1;
 
    while (matchWord = patternWord.exec(input)) {
        result.push(matchWord[0]);
    }
    while (matchDigits = patternDigits.exec(input)) {
        total *= Number(matchDigits[0]);
    }
    console.log(`Cool threshold: ${total}`);
    console.log(`${result.length} emojis found in the text. The cool ones are:`);
 
    for (let word of result) {
        let sum = 0;
        for (let i = 0; i < word.length; i++) {
            sum += word[i].charCodeAt();
        }
        if (sum >= total) {
            console.log(word);
        }
    }
}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])