function areaOfFigures(input){
    let shape =input[0];
    let area = 0;
    if (shape==="square"){
        let a = Number (input[1]);
        area = a*a
        console.log(area.toFixed(3));
    }
    else if (shape ==="rectangle"){
        let a = Number(input[1]);
        let b = Number (input[2]);
        area = a*b
        console.log(area.toFixed(3));
    }
    else if (shape === "circle"){
        let a = Number(input[1])
        area = Math.pow(a,2) * Math.PI
        console.log(area.toFixed(2));
    }
    else if (shape=== "triangle"){
        let a = Number(input[1]);
        let h = Number(input[2]);
        area = a*h/2
        console.log(area.toFixed(2))

    }
}
areaOfFigures(["square", "5"])
