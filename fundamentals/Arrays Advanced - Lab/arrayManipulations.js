function arrayManipulations(input) {
    let numbers = input.shift();
    

    for(let i = 0; i < numbers.length;i++){
        let token = input.shift().split(" ");
        let command = token[0];
        let num = token[1];
        let index = token[2];

        switch(command){
            case"Add":
            numbers.push(num);
            ;break;
            case"Remove":
            numbers = numbers.filter((num) => num !== input[i])
            ;break;
            case"RemoveAt":

            ;break;
            case"Insert":
            ;break;
        }

    
    }
    console.log(numbers);
}
arrayManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3'])