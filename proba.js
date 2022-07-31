
function pianist(input) {
    let list = {}
    let n = input.shift()
    let piece;
    let composer;
    let key;
 
    for (let i = 0; i < n; i++) {
        [piece, composer, key] = input[i].split('|')
        if (!list.hasOwnProperty(piece)) {
            list[piece] = []
            list[piece].push(composer, key)
        }
    }
    for (let j = n; j < input.lenght; j++) {
        let token = input[j].split('|')
        let command = token[0]
        if (command === "Stop") {
            break;
        }
        switch (command) {
            case 'Add':
                // "Add|{piece}|{composer}|{key}":
                piece = token[1]
                composer = token[2]
                key = token[3]
//◦ You need to add the given piece with the information about it to the other pieces and print: "{piece} by {composer} in {key} added to the collection!"◦
                // If the piece is already in the collection,print: "{piece} is already in the collection!"•
                if (!list.hasOwnProperty(piece)){
                    list[piece]=[]
                    list[piece].push(composer,key)
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`)
                }else{
                    console.log(`${piece} is already in the collection!`)
                }
                break;
 
                case 'Remove':
                // "Remove|{piece}": 
                piece=token[1]
                //◦If the piece is in the collection,
                if(list.hasOwnProperty(piece)){
                    // remove it and print: "Successfully removed {piece}!"◦
                    delete list[piece]
                    console.log(`Successfully removed ${piece}!`)
                    // Otherwise,
                }else{
// print: "Invalid operation! {piece} does not exist in the collection."•
console.log(`Invalid operation! ${piece} does not exist in the collection.`)
                }
                break;
 
                case 'ChangeKey':
                // "ChangeKey|{piece}|{new key}": 
                piece=token[1]
                let newKey=token[2]
                //◦If the piece is in the collection,
                if(list.hasOwnProperty(piece)){
// change its key with the given one and print: "Changed the key of {piece} to {new key}!"◦
list[piece].pop(key)
list[piece].push(newKey)
console.log(`Changed the key of ${piece} to ${newKey}!`)
// Otherwise,
                }else{
// print: "Invalid operation! {piece} does not exist in the collection."
console.log(`Invalid operation! ${piece} does not exist in the collection.`)
                }
                break;       
        }
    }
    for(const item in list){
console.log(`${item} -> Composer: ${list[item][0]}, Key: ${list[item][1]}`);
}
    }

    pianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ])