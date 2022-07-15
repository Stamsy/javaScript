function censoredWords(text,word) {
    while(text.includes(word))
    text = text.replace(word,'*'.repeat(word.length));
    
    console.log(text);
    
}
censoredWords('A small sentence with some words', 'small')

/*
function censoredWords(text,word) {
   let tokens = text.split(" ");
   
   console.log(tokens.join("*".repeat(word.length)))
    
}
censoredWords('A small sentence with some words', 'small')
*/