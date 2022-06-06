function summerOutfit(input) {
    let degree = Number(input[0]);
    let timeOfDay = input[1];
    let outfit;
    let shoes;

    if (10 <= degree && degree <= 18) {
        if (timeOfDay == "Morning") {
            outfit = "Sweatshirt";
            shoes = "Sneakers";

        } else if (timeOfDay == "Afternoon" || timeOfDay == "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";

        } console.log(`It's ${degree} degrees, get your ${outfit} and ${shoes}.`)
    }
    else if (18 <= degree && degree <= 24) {
        if (timeOfDay == "Afternoon") {
            outfit = "T-Shirt";
            shoes = "Sandals";

        } else if (timeOfDay == "Morning" || timeOfDay == "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";

        } console.log(`It's ${degree} degrees, get your ${outfit} and ${shoes}.`)
    }
    else if (degree >= 25) {
        if (timeOfDay == "Morning") {
            outfit = "T-Shirt";
            shoes = "Sandals";

        } else if (timeOfDay == "Afternoon") {
            outfit = "Swim Suit";
            shoes = "Barefoot";
        } else if (timeOfDay == "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";
        }console.log(`It's ${degree} degrees, get your ${outfit} and ${shoes}.`)

    } 
}


summerOutfit(["16",
"Morning"]);