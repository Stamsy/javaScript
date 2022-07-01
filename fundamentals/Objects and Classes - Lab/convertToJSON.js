function convertToJSON(name, lastName, hairColor) {

    let person = {
        name,
        lastName,
        hairColor
    };

    let result = JSON.stringify(person);
    console.log(result);
}
convertToJSON('Peter', 'Smith', 'Blond')