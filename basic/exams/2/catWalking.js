function catWalking(input){
    let minWalking = Number(input[0]);
    let countWalking = Number(input[1]);
    let calores = Number(input[2]);
     
    let timeWolking = minWalking*countWalking;
    let allCaloresLess = timeWolking*5;

    if(allCaloresLess >= calores/2){
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${allCaloresLess}.`)
    }else{
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${allCaloresLess}.`)

    }

}
catWalking(["15",
"2",
"500"])