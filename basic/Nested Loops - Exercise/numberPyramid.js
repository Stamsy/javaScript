function numberPyramid(input) {
    let n = Number(input[0])
    let counter = 1;
    let isBigger = false;
    let printCurrentLine = "";
    for (let rows = 1; rows <= n; rows++) {
        for (let cols = 1; cols <= rows; cols++) {
            if (counter > n) {
                isBigger = true;
                break;
            }
            printCurrentLine += counter + " ";
            counter++;
        }
        console.log(printCurrentLine);
        printCurrentLine = "";
        if (isBigger) {
            break;
        }
    }

}
numberPyramid(["7"])