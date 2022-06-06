function easterBake(input) {
    let easterBread = Number(input[0]);

    let sugar = 0;
    let flour = 0;

    let countSugar = 0;
    let countFlour = 0;

    let pacageFlour = 0;
    let pacageSugar = 0;

    let maxSugar = 0;
    let maxFlour = 0;

    for (let i = 1; i <= 2 * easterBread; i++) {
        sugar = Number(input[i]);
        i++;
        flour = Number(input[i]);

        countSugar += sugar;
        countFlour += flour;

        if (sugar > maxSugar) {
            maxSugar = sugar;
        } if (flour > maxFlour) {
            maxFlour = flour;
        }
    }
    pacageSugar = Math.ceil(countSugar / 950);
    pacageFlour = Math.ceil(countFlour / 750);

    console.log(`Sugar: ${pacageSugar}`);
    console.log(`Flour: ${pacageFlour}`);
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`);
}
easterBake(["4",
"500",
"350",
"560",
"430",
"600",
"345",
"578",
"543"])
