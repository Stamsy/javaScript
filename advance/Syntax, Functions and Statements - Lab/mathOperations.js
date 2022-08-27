function solve(one, two, operation) {

    one = Number(one);
    two = Number(two);
    let result = 0;
    switch (operation) {
        case '+':
            result = one + two
            break;

        case '-':
            result = one - two
            break;
        case '*':
            result = one * two
            break;
        case '/':
            result = one / two
            break;

        case '%':
            result = one % two
            break;
        case '**':
            result = one ** two
            break;
    }
    console.log(result);
}
solve(5, 6, '+')