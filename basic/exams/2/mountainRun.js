function mountainRun(input) {
    let record = Number(input[0]);
    let distanceMeters = Number(input[1]);
    let timeSecForOneMeters = Number(input[2]);

    let timeSec = distanceMeters * timeSecForOneMeters;
    let slop = (Math.floor(distanceMeters / 50) * 30);
    let totalTime = timeSec + slop;
    if (totalTime < record) {
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
    } else if(totalTime>= record) {
        console.log(`No! He was ${(totalTime - record).toFixed(2)} seconds slower.`);
    }
}
mountainRun(["1377",
    "389",
    "3"])