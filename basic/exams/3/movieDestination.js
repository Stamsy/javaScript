function movieDestination(input) {
    let buget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let days = Number(input[3]);

    let sum = 0;

    if (season === "Winter") {
        switch (destination) {
            case "Dubai": sum = days * 45000; break;
            case "Sofia": sum = days * 17000; break;
            case "London": sum = days * 24000; break;

        }
    } else if (season === "Summer") {
        switch (destination) {
            case "Dubai": sum = days * 40000; break;
            case "Sofia": sum = days * 12500; break;
            case "London": sum = days * 20250; break;
        }
    } if (destination === "Dubai") {
        sum = sum * 0.70;
    } else if (destination === "Sofia") {
        sum = sum * 1.25;

    }

    if (buget >= sum) {
        console.log(`The budget for the movie is enough! We have ${(buget - sum).toFixed(2)} leva left!`);
    } else {
        console.log(`The director needs ${(sum - buget).toFixed(2)} leva more!`);
    }

}


movieDestination(["400000",
    "Sofia",
    "Winter",
    "20"])