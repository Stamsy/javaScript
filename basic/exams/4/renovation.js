function renovation(input) {
    let index = 0;
    let h = Number(input[index]);
    index++;
    let w = Number(input[index]);
    index++;
    let sizes = h * w * 4;
    let percentNotPaint = Number(input[index]);
    let paintLeft = 0;
    let command = input[index];
    index++;
    let wallsForPainting = sizes - (sizes * percentNotPaint) / 100;
   
    while (command !== "Tired!") {
        let litersPaint = Number (input[index]);
       
        if (wallsForPainting <= litersPaint) {
            paintLeft = litersPaint - wallsForPainting;
            if(wallsForPainting < litersPaint){
                console.log(`All walls are painted and you have ${paintLeft} l paint left!`);
                break;
            } else {
                console.log("All walls are painted! Great job, Pesho!");
                break;
            }
    }
        wallsForPainting -= litersPaint;

        index++;
        command = input[index];
    }
    if (command === "Tired!") {
        console.log(`${wallsForPainting} quadratic m left.`)
    }
}

renovation(["2",
    "3",
    "25",
    "6",
    "7",
    "8"])