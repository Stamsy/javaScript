function substring(word, startIndex, count) {
    let newWord = word.substring(startIndex, count + startIndex);
    console.log(newWord);
}
substring('ASentence', 1, 8)