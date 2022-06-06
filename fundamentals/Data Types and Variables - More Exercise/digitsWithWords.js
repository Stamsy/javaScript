function digitsWithWords(num) {
    switch (num) {
        case 'zero': num = 0; break;
        case 'one': num = 1; break;
        case 'two': num = 2; break;
        case 'three': num = 3; break;
        case 'four': num = 4; break;
        case 'five': num = 5; break;
        case 'six': num = 6; break;
        case 'seven': num = 7; break;
        case 'eight': num = 8; break;
        case 'nine': num = 9; break;
        case 'ten': num = 10; break;
    }console.log(num);

}
digitsWithWords('three')