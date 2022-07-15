function revealWords(words, sentence) {
    let wordsArr = words.split(", ");
    
    for(let word of wordsArr){
        let template = "*".repeat(word.length);
        sentence = sentence.replace(template,word)
     
    }
    console.log(sentence);
}
revealWords('great',
'softuni is ***** place for learning new programming languages')