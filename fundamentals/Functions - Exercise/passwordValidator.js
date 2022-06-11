function passwordValidator(password){
    let isValid = false;
    let isHavingSymbols = false;
    let isShort = false;
    let splitted = password.split("");
    let numCount = []

    let min = 'A'.charCodeAt();
       let max = 'z'.charCodeAt();
       let minNum = '0'.charCodeAt();
       let maxNum = '9'.charCodeAt();
       let minSymbolBetween = '['.charCodeAt();
       let maxSymbolBetween = '`'.charCodeAt();
     
    for(let el of splitted){
        if(splitted.length>10 || splitted.length < 6 ){
            isShort=true;
        }
       let current = el.charCodeAt();
       
       if(current>= minSymbolBetween && current<=maxSymbolBetween){
        isHavingSymbols=true
       }
       if(current>= min && current<=max ){
        continue
       }else if (current >= minNum && current<=maxNum){
        numCount.push(current);
       }else{
        isHavingSymbols = true
       }
    }
    if(isShort){
        console.log(`Password must be between 6 and 10 characters`);
    }
    if(isHavingSymbols){
        console.log(`Password must consist only of letters and digits`);
    }
    if(numCount.length >= 2){
        isValid = true
    }else{
        console.log(`Password must have at least 2 digits`);
    }
    
    if(isValid && !isHavingSymbols && !isShort){
        console.log(`Password is valid`);
    }
    }
passwordValidator('Pa1$111')