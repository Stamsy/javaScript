function solve(input) {
    let money = Number(input.shift());
    let users = Number(input.shift());
    let total = 0;
    let count = 0;
    for (let i = 0; i < users; i++) {
        count++
        let countSearch = Number(input[i]);
        let currentMoney = money;

        if (countSearch <= 1) {
            continue
        }
        if (count % 3 === 0) {
            if(countSearch <= 1){
                continue
            }
           else  if (countSearch > 5) {
                currentMoney = money*6
            
            } else{
                currentMoney *= 3
            }
            
        }
        else if (countSearch > 5) {
            currentMoney *= 2
        }
        total += currentMoney * countSearch
    }
    console.log(`Total money earned: ${total.toFixed(2)}`);
}
solve(["3.0",
    "7",
    "0",
    "1",
    "2",
    "3",
    "4",
    "6",
    "15"])