function movingTarget(input) {
    let targets = input.shift().split(' ').map(x => Number(x));

    let token = input.shift().split(" ");

    for(let i =0; i< targets.length; i++){
        let command = targets[i];
        let 

        switch(command){
            case "Shoot ":
                break;
                case"Add":
                break;
                case"Strike":
                break;
        }
    }
    console.log(token);
    
}
movingTarget(["52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 22 3",
"End"])