function moving(input){
    let width = Number(input[0]);
    let height =Number(input[1]);
    let length = Number(input[2]);

    let freeSpace = width*height*length;
    let index = 3;
    let command = input[index];

    while(command !== "Done"){

        let numberOfBoxes = Number(command);
        freeSpace-=numberOfBoxes;
        
        if(freeSpace < 0){
           console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`)
            break;
        }index++;
        command = input[index];
        
    }
    if(freeSpace >= 0){
        console.log(`${freeSpace} Cubic meters left.`);
    }
}
moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])