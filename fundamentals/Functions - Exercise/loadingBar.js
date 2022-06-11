function loadingBar(num) {
    let comleted = "%".repeat(num/10);
    let incompleted = ".".repeat(10 - comleted.length);

    if(incompleted.length === 0){
        console.log(`100% Complete!`);
    } else{
        console.log(`${num}% [${comleted}${incompleted}]`);
        console.log(`Still loading...`);
    }
}
loadingBar(100)