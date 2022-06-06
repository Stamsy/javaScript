function sortNumbers(a,b,c) {
   
    let second = 0;
    let tirth = 0;

    if (a > b && a > c) {
        bigerNum = a;
        if (b > c) {
            second = b;
            tirth = c;
        } else {
            second = c;
            tirth = b;
        }
    } else if (b > a && b > c) {
        bigerNum = b;
        if (a > c) {
            second = a;
            tirth = c;
        } else {
            second = c;
            tirth = a;
        }
    } else if (c > a && c > b) {
        bigerNum = c;
        if (b > a) {
            second = b;
            tirth = a;
        } else {
            second = a;
            tirth = b;
        }
    }

    console.log(bigerNum);
    console.log(second);
    console.log(tirth);
}

sortNumbers(2, 1, 3)