function newHouse(input) {
    let kindOfFlower = input[0];
    let countFlower = Number(input[1]);
    let buget = Number(input[2]);
    let totalSum = 0;

    switch (kindOfFlower) {
        case "Roses": totalSum = countFlower * 5;
            if (countFlower > 80) {
                totalSum = totalSum * 0.9;
            } break;
        case "Dahlias": totalSum = countFlower * 3.80;
            if (countFlower > 90) {
                totalSum = totalSum * 0.85;
            } break;
        case "Tulips": totalSum = countFlower * 2.80;
            if (countFlower > 80) {
                totalSum = totalSum * 0.85;
            } break;
        case "Narcissus": totalSum = countFlower * 3;
            if (countFlower < 120) {
                totalSum = totalSum * 1.15;
            } break;
        case "Gladiolus": totalSum = countFlower * 2.5;
            if (countFlower < 80) {
                totalSum = totalSum * 1.20;
            } break;
    }
    if (buget >= totalSum) {
        console.log(`Hey, you have a great garden with ${countFlower} ${kindOfFlower} and ${(buget - totalSum).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${(totalSum - buget).toFixed(2)} leva more.`)
    }
}

newHouse(["Gladiolus","64","160"]);