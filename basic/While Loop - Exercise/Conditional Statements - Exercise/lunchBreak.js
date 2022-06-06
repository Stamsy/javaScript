function lunchBreak (input){
    let seriesName = input[0];
    let episodeDuration = Number(input[1]);
    let rest = Number(input[2]);

    let lunchTime = rest/8;
    let timeForRest = rest/4;
    let leftTime = rest -lunchTime-timeForRest;

    if(leftTime>=episodeDuration){
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(leftTime-episodeDuration)} minutes free time.`)
    } else{
        console.log (`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(episodeDuration-leftTime)} more minutes.`)
        
    }

    

}
lunchBreak(["Game of Thrones","48","60"])