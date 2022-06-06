function cake(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let totalPiecesCake = length * width;
    let index = 2;
    let command = input[index];

    while (command !== "STOP") {
        let takenPiece = Number(command);
        totalPiecesCake -= takenPiece;
        if (totalPiecesCake < 0) {
            console.log(`No more cake left! You need ${Math.abs(totalPiecesCake)} pieces more.`);
            break;
        } index++;
        command = input[index];
    } if (command === "STOP") {
        console.log(`${totalPiecesCake} pieces are left.`);
    }


}



cake (["10",
    "10",
    "20",
    "20",
    "20",
    "20",
    "21"])
