function reverseAnArrayOfNumbers(num, numbers) {
    let result = [];
    let totalRes = []
    for (let i = 0; i < num; i++) {
        result.push(numbers[i]);
    
    }
    for(let r = result.length - 1;  r >= 0 ;r --){
        totalRes.push(result[r])
        
    }
    console.log(totalRes.join(' '));
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])