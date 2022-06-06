function skeleton(input) {
    let min = Number(input[0]);
    let sec = Number(input[1]);
    let length = Number(input[2]);
    let sec100metars = Number(input[3]);


    let secQuota = min * 60 + sec;
    let lesTime = length / 120;
    let sumLesTime = lesTime * 2.5;
    let marinTime = (length / 100) * sec100metars - sumLesTime

        ;
    if (secQuota >= marinTime) {
        console.log(`Marin Bangiev won an Olympic quota!`)
        console.log(`His time is ${marinTime.toFixed(3)}.`)
    } else {
        console.log(`No, Marin failed! He was ${(marinTime - secQuota).toFixed(3)} second slower.`);
    }


}
skeleton(["1",
"20",
"1546",
"12"])