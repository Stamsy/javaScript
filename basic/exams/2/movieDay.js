function movieDay(input){
    let timeFilming = Number (input[0]);
    let numberOfScenes7 = Number(input[1]);
    let timeScenes = Number(input[2]);

    let preparation = timeFilming*0.15;
    let scenes = numberOfScenes7*timeScenes;
    let neededTime = preparation+scenes;

    if(neededTime>timeFilming){
        console.log(`Time is up! To complete the movie you need ${Math.ceil(neededTime-timeFilming)} minutes.`)

    }else{
        console.log(`You managed to finish the movie on time! You have ${Math.ceil(timeFilming-neededTime)} minutes left!`)
    }

}
movieDay(["60","15","3"])