function integerAndFloat(numOne, numTwo, numTree) {
    let sum = numOne + numTwo + numTree;
    let result = "" + sum;
    let type = 'Integer';
    for(let i = 0; i < result.length; i++){
        if(result[i] == '.'){
            type = 'Float';
            break;
        } 
    }
    console.log(`${sum} - ${type}`);
}
integerAndFloat(9, 100, 1.1);
integerAndFloat(100, 200, 303);