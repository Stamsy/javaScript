function building(input) {
    let floor = Number(input[0]);
    let room = Number(input[1]);

    for (let a = floor; a > 0; a--) {
        let buff = "";
        for (let b = 0; b < room; b++) {
            if (a === floor) {
                buff += "L" + a + b + " ";
            } else if (a % 2 === 0) {
                buff += "O" + a + b + " ";
            } else {
                buff += "A" + a + b + " ";
            }
        }
        console.log(buff);
    }

}
building(["6", "4"])
