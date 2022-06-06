function gymnastics(input) {
    let country = input[0];
    let instrument = input[1];

    let difficulty = 0;
    let performance = 0;
    let sum = 0;
    let points = 0;
    let percentagePoints = 0;

    if (instrument === "ribbon") {
        switch (country) {
            case "Russia":
                difficulty = 9.100;
                performance = 9.400;
                sum = difficulty + performance;
                points = 20 - sum;
                percentagePoints = (points / 20) * 100;
                break;
            case "Bulgaria":
                difficulty = 9.600;
                performance = 9.400;
                sum = difficulty + performance;
                points = 20 - sum;
                percentagePoints = (points / 20) * 100;
                break;
            case "Italy":
                difficulty = 9.200;
                performance = 9.500;
                sum = difficulty + performance;
                points = 20 - sum;
                percentagePoints = (points / 20) * 100;
                break;
        }

    } else if (instrument === "hoop") {
        switch (country) {
            case "Russia":
                difficulty = 9.300;
                performance = 9.800;
                sum = difficulty + performance;
                points = 20 - sum;
                percentagePoints = (points / 20) * 100;
                break;
            case "Bulgaria":
                difficulty = 9.550;
                performance = 9.750;
                sum = difficulty + performance;
                points = 20 - sum;
                percentagePoints = (points / 20) * 100;
                break;
            case "Italy":
                difficulty = 9.450;
                performance = 9.350;
                sum = difficulty + performance;
                points = 20 - sum;
                percentagePoints = (points / 20) * 100;
                break;
        }

    } else if (instrument === "rope") {
        switch (country) {
            case "Russia":
                difficulty = 9.600;
                performance = 9.000;
                sum = difficulty + performance;
                points = 20 - sum;
                percentagePoints = (points / 20) * 100;
                break;
            case "Bulgaria":
                difficulty = 9.500;
                performance = 9.400;
                sum = difficulty + performance;
                points = 20 - sum;
                percentagePoints = (points / 20) * 100;
                break;
            case "Italy":
                difficulty = 9.700;
                performance = 9.150;
                sum = difficulty + performance;
                points = 20 - sum;
                percentagePoints = (points / 20) * 100;
                break;
        }
    }
        console.log(`The team of ${country} get ${sum.toFixed(3)} on ${instrument}.`)
        console.log(`${percentagePoints.toFixed(2)}%`);
    

}
gymnastics(["Russia",
    "rope"])