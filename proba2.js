function pianist(data) {
    let list = {};
    let n = data.shift();
    let piece;
    let composer;
    let key;
    for (let i = 0; i < n; i++) {
        [piece, composer, key] = data[i].split("|");
        if (!list.hasOwnProperty(piece)) {
            list[piece] = [];
            list[piece].push(composer, key);
        }
    }
    for (let j = n; j < data.length; j++) {
        let token = data[j].split("|");
        let command = token[0];
        if (command === "Stop") {
            break;
        }
 
        switch (command) {
            case "Add":
                piece = token[1];
                composer = token[2];
                key = token[3];
                if (!list.hasOwnProperty(piece)) {
                    list[piece] = [];
                    list[piece].push(composer, key);
                    console.log(
                        `${piece} by ${composer} in ${key} added to the collection!`
                    );
                } else {
                    console.log(`${piece} is already in the collection!`);
                }
                break;
 
            case "Remove":
                piece = token[1];
                if (list.hasOwnProperty(piece)) {
                    delete list[piece];
                    console.log(`Successfully removed ${piece}!`);
                } else {
                    console.log(
                        `Invalid operation! ${piece} does not exist in the collection.`
                    );
                }
                break;
 
            case "ChangeKey":
                piece = token[1];
                let newKey = token[2];
                if (list.hasOwnProperty(piece)) {
                    list[piece].pop(key);
                    list[piece].push(newKey);
                    console.log(`Changed the key of ${piece} to ${newKey}!`);
                } else {
                    console.log(
                        `Invalid operation! ${piece} does not exist in the collection.`
                    );
                }
                break;
        }
    }
 
    for (const item in list) {
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