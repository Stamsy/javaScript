function inventory(input) {
    let items = input.shift().split(', ');

    for (let i = 0; i < input.length; i++) {
        let token = input[i].split(" - ");
        let command = token[0];
        let element = token[1];

        switch (command) {
            case "Collect":
                if (!items.includes(element)) {
                    items.push(element)
                } else {
                    continue;
                };
                break;
            case "Drop":
                if (items.includes(element)) {
                    for (let i = 0; i < items.length; i++) {
                        if (element === items[i]) {
                            items.splice(i, 1);
                            break;
                        }
                    }
                } else {
                    continue;
                };
                break;
            case "Combine Items":
                let elementSplit = element.split(":");
                let oldWord = elementSplit.shift();
                let newWord = elementSplit.shift();
                if (items.includes(oldWord)) {
                    items.push(newWord)
                } else {
                    continue;
                }
                break;
            case "Renew":
                if (items.includes(element)) {
                    let index = items.indexOf(element)
                    items.splice(index, 1)
                    items.push(element)
                }
                break;
        }
        if (command === "Craft") {
            items.join(", ")
        }
    }
    console.log(items.join(", "))
} inventory([
    'Iron, Wood, Sword',
    'Collect - Gold',
    'Drop - Wood',
    'Craft!'
]
)
