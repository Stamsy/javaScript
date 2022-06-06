function amazingNumbers(num) {
    let result = 0;
    let numToString = String(num);

    for (let i = 0; i < numToString.length; i++) {
        result += Number(numToString[i])
    }
    let resAsString = String(result);
    let special = false;
    for (let j = 0; j < resAsString.length; j++) {
        if (resAsString[j] == '9') {
            special = true;
        }
    }
    console.log(`${numToString} Amazing? ${special ? 'True' : 'False'}`); 
}
amazingNumbers(1233);
amazingNumbers(999)