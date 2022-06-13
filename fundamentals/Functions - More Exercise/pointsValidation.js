function pointsValidation(input) {
    let x1 = input[0];
    let y1 = input[1];
    let x2 = input[2];
    let y2 = input[3];

    let x = 0;
    let y = 0;

    let checkOne = (Math.sqrt(Math.pow((x1 - x),2) + Math.pow((y1 - y),2)));
    let checkTwo = (Math.sqrt(Math.pow((x2 - x),2) + Math.pow((y2 - y),2)));
    let checkTree = (Math.sqrt(Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2)));
    
    

    if(Number.isInteger(checkOne)){
        console.log(`{${x1}, ${y1}} to {${x}, ${y}} is valid`);
    }  else {
        console.log(`{${x1}, ${y1}} to {${x}, ${y}} is invalid` );
    }
    if(Number.isInteger(checkTwo)){
        console.log(`{${x2}, ${y2}} to {${x}, ${y}} is valid`);
    }  else {
        console.log(`{${x2}, ${y2}} to {${x}, ${y}} is invalid` );
    }
    if(Number.isInteger(checkTree)){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }  else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid` );
    }
}
pointsValidation([2, 1, 1, 1])