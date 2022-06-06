function shopping(input){
    let buget = Number(input[0]);
    let videoCard = Number(input[1]);
    let processor = Number (input[2]);
    let ram = Number(input[3]);

    let moneyVideoCard = videoCard*250;
    let moneyProcessor = moneyVideoCard*0.35*processor;
    let moneyRam = moneyVideoCard*0.1*ram;
    let totalSum = moneyVideoCard+moneyProcessor+moneyRam;
    
    if(videoCard>processor){
        totalSum = totalSum*0.85;
    }
    if(totalSum<=buget){
        console.log(`You have ${(buget-totalSum).toFixed(2)} leva left!`)
}else{
    console.log(`Not enough money! You need ${(totalSum-buget).toFixed(2)} leva more!`)
}
}
shopping(["920.45","3","1","1"])