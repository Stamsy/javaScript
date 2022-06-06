function convert (input){
    let radian = Number(input[0]);
    let degree = (radian * (180 / Math.PI));
        console.log(degree);
}
convert(["3.1416"]);