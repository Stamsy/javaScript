function everest (input){
    let index = 0;
    let command = input[index];
    //index++;

    let startHeight = 5364;
    let target = 8848;
    let currentHeight = 0;
    let count = 1;

    while(command !== "END"){
        let rest = command;

        if(rest === "Yes"){
            count++;
        }
        index++;
        let metres = Number(input[index]);
        currentHeight += metres;
        if(currentHeight + startHeight >= target){
            break;
        }
        if(count === 5){
            break;
        }
        index++;
        command = input[index];
    }
    if(currentHeight + startHeight < target){
        console.log(`Failed`);
        console.log(`${startHeight + currentHeight}`);
    }else{
        console.log(`Goal reached for ${count} days!`);
    }

}
everest ([])