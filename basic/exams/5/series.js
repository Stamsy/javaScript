function series(input) {
    let index = 0;
    let budget = Number(input[index]);
    index++
    let series = Number(input[index]);
    index++
    let sum = 0;

    for (let i = 0; i < series; i++) {
        let name = input[index];
        index++;
        let price = Number(input[index]);
        index++;

        switch (name) {
            case 'Thrones': price = price - price * 0.5; break;
            case 'Lucifer': price = price - price * 0.4; break;
            case 'Protector': price = price - price * 0.3; break;
            case 'TotalDrama': price = price - price*0.2; break;
            case 'Area': price = price - price*0.1; break;
            
        }
        sum += price;
    }if(budget >= sum){
            console.log(`You bought all the series and left with ${(budget - sum).toFixed(2)} lv.`);
        } else if (budget< sum){
            console.log(`You need ${(sum - budget).toFixed(2)} lv. more to buy the series!`);
        }
    
}
        
series(["25",
"6",
"Teen Wolf",
"8",
"Protector",
"5",
"TotalDrama",
"5",
"Area",
"4",
"Thrones",
"5",
"Lucifer",
"9"])