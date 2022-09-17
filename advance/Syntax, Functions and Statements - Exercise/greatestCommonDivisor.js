function solve(a,b){
    let gcd = 0;
for ( let i = 1; i<= a && i<=b;i++){
    if (a%i == 0 && b % i ==0){
        gcd = i;
    }

}
console.log(gcd)
}
solve(15,5)