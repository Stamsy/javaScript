function shoppingList(input) {
    let list = input.shift().split("!");
    let index = 0;
    let token = input[index];
    index++
    let i;
    while (token !== "Go Shopping!") {
        let toDoList = token.split(" ");
        let command = toDoList.shift();
        let productOne = toDoList[0];
        let productTwo = toDoList[1];

        switch (command) {
            case "Urgent":
                if (!list.includes(productOne)) {
                    list.unshift(productOne)
                }
                break;
            case "Unnecessary":
                if (list.includes(productOne)) {
                     i = list.indexOf(productOne);
                    list.splice(i, 1);
                }
                break;

            case "Correct":
                if (list.includes(productOne)) {
                    i = list.indexOf(productOne);
                    list.splice(i, 1, productTwo);
                }
                break;

            case "Rearrange":
                if (list.includes(productOne)) {
                    i = list.indexOf(productOne);
                    list.push(splice(i, 1)[0]);
                   
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
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])
