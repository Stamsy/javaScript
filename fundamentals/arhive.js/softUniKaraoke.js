function softUniKaraoke(input) {
    let participantsObj = {};

    while(input[0] != "dawn"){
     let name = input.shift().split(", ");
     for(let n of name){
        participantsObj[name] = name
     }
  
    let songs = input.shift().split(", ");
    for(let s of songs){
        participantsObj[songs] = songs;
     }
    
}
console.table(participantsObj);
}
softUniKaraoke(["Trifon, Vankata, Gesha",
    "Dragana - Kukavice, Bon Jovi - It's my life, Lorde - Royals",
    "Gesha, Bon Jovi - It's my life, Best Rock",
    "Vankata, Dragana - Kukavice, Best Srabsko",
    "Vankata, Dragana - Kukavice, Best Srabsko",
    "Vankata, Dragana - Kukavice, Stiga Tolko Srabsko",
    "Vankata, PHP Web, Educational 101",
    "dawn"])