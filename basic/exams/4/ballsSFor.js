function balls(input){
    numOfBalls = Number(input[0]);
    let counterRed = 0;
    let counterOrange = 0;
    let counterYellow = 0; 
    let counterWhite = 0;
    let counterOther = 0;
    let totalPoints = 0;
    let divides = 0;
    let end = input.length;
 
    for(let i = 1 ; i < end ; ++i){
        if(input[i] === "red"){
        counterRed ++;
        totalPoints += 5;
        }
        else if(input[i] === "orange"){
        counterOrange++;
        totalPoints+=10;
        }
        else if(input[i] === "yellow"){
        counterYellow++;
        totalPoints+=15;
       }
        else if(input[i] === "white"){
        counterWhite++;
        totalPoints+=20;
        }
        else if(input[i] === "black"){
            divides++;
            let b = totalPoints/2;
            totalPoints = Math.floor(b);
 
        } 
        else {
            counterOther++;
        }
 
        
    }
    console.log(`Total points: ${totalPoints}`);
    console.log(`Red balls: ${counterRed}`);
    console.log(`Orange balls: ${counterOrange}`);
    console.log(`Yellow balls: ${counterYellow}`);
    console.log(`White balls: ${counterWhite}`);
    console.log(`Other colors picked: ${counterOther}`);
    console.log(`Divides from black balls: ${divides}`);
 
 
}balls(["10",
"white",
"white",
"ee",
"red",
"orange",
"red",
"black",
"black",
"black",
"black"])