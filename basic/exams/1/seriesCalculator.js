function calculator(input){
    let Name =input[0];
    let countSeasons = Number(input[1]);
    let countEpisodes = Number(input[2]);
    let timeEpisodes = Number(input[3]);

    let advertising =timeEpisodes+timeEpisodes*0.2;
    let extraTime = countSeasons*10;
    let total = (advertising*countEpisodes*countSeasons+extraTime);
    console.log(`Total time needed to watch the ${Name} series is ${total} minutes.`)
}
calculator(["Lucifer","3","18","55"])