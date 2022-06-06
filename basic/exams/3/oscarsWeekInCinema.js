function oscarsWeekInCinema(input) {
    let movieName = input[0];
    let hall = input[1];
    let countTincket = input[2];
    let sum = 0;

    if (hall === "normal") {

        switch (movieName) {
            case "A Star Is Born": sum = 7.50 * countTincket; break;
            case "Bohemian Rhapsody": sum = 7.35 * countTincket; break;
            case "Green Book": sum = 8.15 * countTincket; break;
            case "The Favourite": sum = 8.75 * countTincket; break;
        }
    }
    else if (hall === "luxury") {
        switch (movieName) {
            case "A Star Is Born": sum = 10.50 * countTincket; break;
            case "Bohemian Rhapsody": sum = 9.45 * countTincket; break;
            case "Green Book": sum = 10.25 * countTincket; break;
            case "The Favourite": sum = 11.55 * countTincket; break;
        }

    }
    else if (hall === "ultra luxury") {
        switch (movieName) {
            case "A Star Is Born": sum = 13.50 * countTincket; break;
            case "Bohemian Rhapsody": sum = 12.75 * countTincket; break;
            case "Green Book": sum = 13.25 * countTincket; break;
            case "The Favourite": sum = 13.95 * countTincket; break;
        }
    }
    console.log(`${movieName} -> ${sum.toFixed(2)} lv.`);

}
oscarsWeekInCinema(["The Favourite",
    "ultra luxury",
    "34"
    ])