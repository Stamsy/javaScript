function  worldSwimmingRecord(input) {
    let sec =Number(input[0]);
    let meters = Number(input[1]);
    let timeSec = Number(input[2]);
    
    let swiming = meters*timeSec;
    let addTime = Math.floor(meters/15)*12.5;
    let totalTime = swiming + addTime;
    
    if(sec<=totalTime){
        console.log(`No, he failed! He was ${(totalTime-sec).toFixed(2) } seconds slower.`)
    } else {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
    }
}
worldSwimmingRecord(["10464","1500","20"])