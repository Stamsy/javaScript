function triangleOfNumbers(num) {
    for (let i = 1; i <= num; i++) {
        let res = "";
        for (let j = 1; j <= i; j++) {
            res += `${i} `;
        }

        console.log(res);
    }
}
triangleOfNumbers (3)