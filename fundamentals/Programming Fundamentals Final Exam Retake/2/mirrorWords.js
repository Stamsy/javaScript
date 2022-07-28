function mirrorWords(input) {
    let pattern = /(@|#)([A-Za-z]{3,})\1{2}([A-Za-z]{3,})\1/g

    let match = pattern.exec(input);
    let words = [];
    let counter = 0;

    while (match != null) {
        counter++
        let wordOne = match[2];
        let wordTwo = match[3];
        let reverseWord = wordTwo.split("").reverse().join("")

        if(wordOne == reverseWord){
            words.push(`${wordOne} <=> ${wordTwo}`);
        }
        
        match = pattern.exec(input)

}
if(counter == 0){
    console.log(`No word pairs found!`);
} else{
    console.log(`${counter} word pairs found!`);
}
    if(words.length == 0){
        console.log(`No mirror words!`);
    } else{
        console.log('The mirror words are:');
        console.log(words.join(", "));
    }
   
}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
])