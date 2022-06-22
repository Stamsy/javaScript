function shoppingList(arr) {
 
    let arrOfProducts = arr.shift().split('!');
    let index = 0;
    let command = arr[index];
    index++;
 
    while (command !== 'Go Shopping!') {
        command = arr[index].split(' ');
        let token = command[0];
 
        switch (token) {
            case 'Urgent':
                let productOne = command[1];
                if (arrOfProducts.includes(productOne)) {
                    command = arr[index];
                    index++;
                    continue;
                } else {
                    arrOfProducts.unshift(productOne);
                }
                break;
            case 'Unnecessary':
                let productTwo = command[1];
                if (!arrOfProducts.includes(productTwo)) {
                    command = arr[index];
                    index++;
                    continue;
                } else {
                    let indexOfProductTwo = arrOfProducts.indexOf(productTwo);
                    arrOfProducts.splice(indexOfProductTwo, 1);
                }
                break;
            case 'Correct':
                let oldItem = command[1];
                let newItem = command[2];
                if (!arrOfProducts.includes(oldItem)) {
                    command = arr[index];
                    index++;
                    continue;
                } else {
                    let indexOfOldItem = arrOfProducts.indexOf(oldItem);
                    arrOfProducts.splice(indexOfOldItem, 1, newItem);
                }
                break;
            case 'Rearrange':
                let itemOfRearrange = command[1];
                if (!arrOfProducts.includes(itemOfRearrange)) {
                    command = arr[index];
                    index++;
                    continue;
                } else {
                    let indexOfRearrange = arrOfProducts.indexOf(itemOfRearrange);
                    arrOfProducts.splice(indexOfRearrange, 1);
                    arrOfProducts.push(itemOfRearrange);
                }
                break;
        }
        command = arr[index];
        index++;
    }
    arrOfProducts = arrOfProducts.join(', ');
    console.log(arrOfProducts);
 
}
shoppingList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"]);