function replaceRepeatingChars(input) {
    let letters = '';
    for(let el of input){
    
        if(el !== letters[letters.length - 1]){
            letters += el
        }
    }
    console.log(letters);
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')