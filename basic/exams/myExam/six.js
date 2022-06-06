function pinCode(input){
    let upperLimitNumOne = Number(input[0]);
    let  upperLimitnumTwo = Number(input[1]);
    let  upperLimitnumTree = Number(input[2]);

    let pin = "";

    for(let i =1; i < upperLimitNumOne;i++){
        for(let j = 2; j <= upperLimitnumTwo; j++){
            for(let k = 1; k < upperLimitnumTree;k++){
                if( i % 2 === 0 && j %j === 0 && k %2 === 0){

                 pin += `${i}${j}${k} ` ;
                
                }
            }
        }
    }
    console.log(pin);
}
pinCode(["3","5","5"])