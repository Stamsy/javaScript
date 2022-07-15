function countStringOccurrences(sentence, word) {
    let newSentence = sentence.split(" ");
    
    let count = 0;
    for(let i of newSentence){
        if(i.includes(word)){
            count++
        }
    }
    console.log(count);
}
countStringOccurrences('This is a word and it also is a sentence',
'is')