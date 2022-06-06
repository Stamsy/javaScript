function englishName(num){
    
    let lastDigit = num % 10;
    let res = "";
    switch (lastDigit) {
        case 0: res = 'zero'; break;
        case 1: res = 'one'; break;
        case 2: res = 'two'; break;
        case 3: res = 'tree'; break;
        case 4: res = 'four'; break;
        case 5: res = 'five'; break;
        case 6: res = 'six'; break;
        case 7: res = 'seven'; break;
        case 8: res = 'eight'; break;
        case 9: res = 'nine'; break;
    }
console.log(res);
}
englishName(512)