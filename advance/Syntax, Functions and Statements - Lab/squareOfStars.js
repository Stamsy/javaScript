function solve(n) {
    const star = '* ';
   
        for (let i = 0; i < n; i++) {
            console.log(`${(star.repeat(n)).trim()}`);
        }
}
solve(6)
/*    const star = '* ';
    if (n === null || n === ' ' || n === 0) {
        for (let i = 0; i < n; i++) {
            console.log(`${(star.repeat(n)).trim()}`);
        }
    } else {
        for (let i = 0; i < n; i++) {
            console.log(`${(star.repeat(n)).trim()}`);
        }
    }
}*/