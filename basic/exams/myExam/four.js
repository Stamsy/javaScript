function grandpaStavri(input) {
    let days = Number(input[0]);    // 3
 
    let totalRakia = 0;
    let totalGradus = 0;
    let totalLiter = 0;
 
    let index1 = 1;
    let index2 = 2;
 
    for (let i = 0; i < days; i++) {
        let rakia = Number(input[index1]);
        let gradus = Number(input[index2]);
 
        totalRakia += rakia;
        totalGradus = totalGradus + rakia * gradus;
        totalLiter += rakia;
 
        index1 += 2;
        index2 += 2;
    }
 
    let average = totalGradus / totalRakia;
 
    console.log(`Liter: ${totalLiter.toFixed(2)}`);
    console.log(`Degrees: ${average.toFixed(2)}`);
 
    if (average < 38) {
        console.log(`Not good, you should baking!`);
    } else if (average <= 42) {
        console.log(`Super!`);
    } else {
        console.log(`Dilution with distilled water!`);
    }
}