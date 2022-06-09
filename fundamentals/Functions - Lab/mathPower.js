function mathPower(num,step) {
    let result = 1;
    for(let i =0; i< step;i++){
        result *= num
    }
    console.log(result);
}
mathPower(2,8)