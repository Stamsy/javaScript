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

shoppingList(["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Potatoes",
"Go Shopping!"])
