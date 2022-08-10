function shoppingList(input) {
    let list = input.shift().split("!");
    let index = 0;
    let token = input[index];
    index++

    while (token !== "Go Shopping!") {
        let toDoList = token.split(" ");
        let command = toDoList[0];
        let productOne = toDoList[1];
        let i = list.indexOf(productOne)

        switch (command) {
            case "Urgent":
                if (i < 0) {
                    list.unshift(productOne)
                }
                break;

            case "Unnecessary":
                if (list.includes(productOne)) {
                    list.splice(i, 1)
                }
                break;

            case "Correct":
                let newItem = toDoList[2];
                if (list.includes(productOne)) {
                    list.splice(i, 1, newItem)
                }
                break;

            case "Rearrange":
                if (list.includes(productOne)) {
                    list.splice(i, 1)
                    list.push(productOne)
                }
                break;
        }
        token = input[index];
        index++

    }
    console.log(list.join(", "));
}

shoppingList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Milk",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])
/*function solve(input) {
    let list = input.shift().split("!");

    while (input[0] !== "Go Shopping!") {
        let [command, item, newItem] = input.shift().split(" ");
        let i = list.indexOf(item)
        switch (command) {
            case "Urgent":
                if (!list.includes(item)) {
                    list.unshift(item)
                }
                break;
            case "Unnecessary":
                if (list.includes(item)) {
                    list.splice(i, 1)
                }
                break;
            case "Correct":
                if (list.includes(item)) {
                    list.splice(i, 1, newItem)
                }
                break;
            case "Rearrange":
                if (list.includes(item)) {
                    list.splice(i, 1)
                    list.push(item)
                }
                break;
        }
    }
    console.log(list.join(", "));
}*/
