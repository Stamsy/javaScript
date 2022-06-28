function softUniKaraoke(arr) {
    let singers = arr.shift( ).split(", ")
    let songs = arr.shift().split(" - ")
    
    while (arr[0] !== "dawn") {
        let command = arr.shift().split(", ")
        let participant = command.shift();
        let song = command[0];
        let award = command[1]
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