function softUniKaraoke(arr) {
    let participants = arr.shift().split(", ");
    let songs = arr.shift().split(", ");
    let index = 0;
    let performance = arr[index];
    index++;
    let resName = "";
    let resAward = "";
    let counter = 0;
    let isIncludes = false;
 
    while (performance !== "dawn") {
        performance = performance.split(", ");
        let name = performance[0];
        let songPerformance = performance[1];
        let award = performance[2];
 
        if (participants.includes(name) && songs.includes(songPerformance)) {
            isIncludes = true;
            counter++;
            let currentName = name;
            if (resName !== currentName) {
                resName = currentName;
                console.log(`${resName}: ${counter} awards`);
                counter = 0;
            }
            let currentAward = "";
            currentAward = award;
            if (currentAward !== resAward) {
                resAward = currentAward;
                console.log(`--${resAward}`);
            }
 
        }
        performance = arr[index];
        index++;
    }
    if (performance === "dawn") {
        if (isIncludes === false) {
            console.log("No awards");
        }
    }
}
softUniKaraoke(["Trifon, Vankata, Gesha",
    "Dragana - Kukavice, Bon Jovi - It's my life,Lorde - Royals",
    "Gesha, Bon Jovi - It's my life, Best Rock",
    "Vankata, Dragana - Kukavice, Best Srabsko",
    "Vankata, Dragana - Kukavice, Best Srabsko",
    "Vankata, Dragana - Kukavice, Stiga Tolko Srabsko",
    "Vankata, PHP Web, Educational 101",
    "dawn"])