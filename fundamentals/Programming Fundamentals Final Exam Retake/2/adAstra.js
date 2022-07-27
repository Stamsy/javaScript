function adAstra(input) {
    const calories = 2000;
    let text = input.shift();
    let patternInput = /(\||#)(?<product>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g

    let match = patternInput.exec(text);

    let textInfo = [];
    let total = 0;


    while (match !== null) {
        let { product, date, calories } = match.groups;
        calories = Number(calories);
        total += calories;
        textInfo.push({ product, date, calories });
        match = patternInput.exec(text)
    }
    let needDay = Math.floor(total / calories)
    console.log(`You have food to last you for: ${needDay} days!`);

    textInfo.forEach(obj => {
        console.log(`Item: ${obj.product}, Best before: ${obj.date}, Nutrition: ${obj.calories}`);
    });
}
adAstra([
    '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'
])