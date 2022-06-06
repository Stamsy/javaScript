function demo(input){
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);

    let volumAquarium = length * width * height;
    let volumLiters = volumAquarium * 0.001;
     let needSpace = volumAquarium * (1 - 0.17)/1000;
    console.log(needSpace)
}
demo(["85", "75", "47", "17"])