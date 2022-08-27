function solve(data) {
 
    let end = data.pop()
    let play = {};
    let totalTime= 0;
 
    for(let el of data) {
        let [command, band, minutesOrSingers] = el.split('; ')
 
        if(command === "Play") {
            let time = Number(minutesOrSingers);
            if(!play.hasOwnProperty(band)) {
                play[band] = {};
                play[band]['time'] = 0;
                play[band]["singers"] = [];
            }
            let curTime = Number(play[band]["time"]);
            play[band]["time"] = curTime + time
            totalTime += play[band]["time"]
        } else {
            let singers = minutesOrSingers.split(', ')
            if(!play.hasOwnProperty(band)) {
                play[band] = {};
                play[band]["time"] = 0;
                play[band]["singers"] = [];
            }
            let oldSingers = play[band]["singers"];
            let newSingers = [...oldSingers,...singers];
            let newSet = new Set(newSingers);
            play[band]["singers"] = Array.from(newSet);
        }
    }
    Object.entries(play).forEach(([band,time])=>{
        console.log(`${band} -> ${play[band].time}`);
    })
    for (let band in play) {
        
        let singers = (play[band].singers)
        console.log(`=>${singers}`)
        return
    }
   /* console.log(`Total time: ${totalTime}`);
 
    let playToArray = Object.entries(play);
    let sorted = playToArray.sort((b, a) => {
        return b[1]["time"] - a[1]["time"]
    });
 
    sorted.forEach((el) => {
        console.log(`${el[0]} -> ${el[1]["time"]}`);
    })
    
 
    /* sorted.forEach((banda) => {
        curBanda = banda[0];
        curInfo = Object.entries(banda[1]);
        asd = curBanda[0][1];
        console.table(`=> ${curBanda[1]}`)
    }) */
 
}
solve(["Play; The Beatles; 2584",
"Add; The Beatles; John Lennon, George Harrison, Ringo Starr",
"Add; The Beatles; Paul McCartney, George Harrison",
"Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards",
"Play; The Rolling Stones; 4239",
"Start!"])