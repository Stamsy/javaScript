function concatenateData(input){
    let firstName = input[0];
    let lastName = input[1];
    let age = Number (input [2]);
    let town = input[3];
    let res =   `You are ${firstName} ${lastName} , a ${age} - years old person form ${town}.`
    console.log(res)
}
concatenateData(["Todor", "Stoyanov", "33", "Sofia"])