function makeADictionary(arr) {
    let object = {};

    let elements = []
    for (let terms of arr) {
        let parseElement = JSON.parse(terms);

        let termAndDefinitions = Object.entries(parseElement);
        let tempKey = Object.keys(parseElement);

        if (elements.includes(termAndDefinitions[0])) {
            object[termAndDefinitions[0]] = termAndDefinitions[1]
        } else {
            object = Object.assign(object, parseElement);
            elements.push(tempKey);
        }
        
    }
    let termsAll = Object.keys(object);
        termsAll = termsAll.sort(((a, b) => {
            return  a.localeCompare(b)}));
        for (let term of termsAll)
            console.log(`Term: ${term} => Definition: ${object[term]}`);
}
makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
])