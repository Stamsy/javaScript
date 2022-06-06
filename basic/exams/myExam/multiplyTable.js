function multiplication(input){
    let num = input[0];
    let numOne = Number(num[2]);
    let numTwo = Number(num[1]);
    let numTree = Number(num[0]);

    let result = "";

    for (let i = 1; i <=numOne; i++) {
        for (let j = 1; j <=numTwo; j++){
            for (let k = 1; k <=numTree; k++){
                if(i >0 && k >0 && j > 0){
                    result = `${i} * ${j} * ${k} = ${i*j*k};`;
                    console.log(result);
                }
                
            }
        }
    }
}
multiplication(["324"])