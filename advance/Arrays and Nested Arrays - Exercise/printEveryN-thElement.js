function solve(input,step) {
    let newArr = []
    for(let i = 0; i <input.length; i++){
        if(i % step === 0){
            newArr.push(input[i])
        }
    }
    return newArr;
}
solve(['1', 
'2',
'3', 
'4', 
'5'], 
6)