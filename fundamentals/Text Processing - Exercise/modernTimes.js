function modernTimes(input) {
    let specialWords = [];
    let sentence = input.split(" ")
    
    for (let word of sentence) {
        if (word.includes("#") && word.length > 1) {
           let  words = word.substring(1)
           let arrL = words.length
           let flag = true;
        
           for(let i = 0; i < arrL;i++ ){
            let currentCode = words[0].charCodeAt(0)
            if((currentCode < 65 || currentCode > 90) && (currentCode < 97 || currentCode > 122) ){
                flag = false
            }
        }
           if(flag){
             specialWords.push(words)
           }
        }
    }
    console.log(specialWords.join("\n"));
}
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')