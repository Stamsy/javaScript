function thePianist(input) {
  let num = Number(input.shift());
  let pianoPieces = {};

  for (let i = 0; i < num; i++) {
    let pianoList = input.shift().split("|")
    let piece = pianoList[0];
    let composer = pianoList[1];
    let key = pianoList[2];
    pianoPieces[piece] = {
      composer,
      key
    };
  }
  while (input[0] != "Stop") {
    let tokens = input.shift().split("|");
    let command = tokens[0];
    let piece = tokens[1];
    let composer = tokens[2];
    let key = tokens[3];

    switch (command) {
      case "Add":
        if (pianoPieces.hasOwnProperty(piece)) {
          console.log(`${piece} is already in the collection!`);
          break;
        } else {
          pianoPieces[piece] = {
            composer,
            key
          };

          console.log(`${piece} by ${composer} in ${key} added to the collection!`);
        }
        break;

      case "Remove":
        if (pianoPieces.hasOwnProperty(piece)) {
          delete pianoPieces[piece];
          console.log(`Successfully removed ${piece}!`);
        } else {
          console.log(`Invalid operation! ${piece} does not exist in the collection.`);
          break;
        }
        break;
      case "ChangeKey":
        if (pianoPieces.hasOwnProperty(piece)) {
          pianoPieces[piece].key = composer;
          console.log(`Changed the key of ${piece} to ${composer}!`);
        } else {
          console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
        break;
    }
  }
  for (let el of Object.entries(pianoPieces)) {
    let name = el[0];
    let nameComp = pianoPieces[el[0]].composer;
    let keyName = pianoPieces[el[0]].key;
    console.log(`${name} -> Composer: ${nameComp}, Key: ${keyName}`);
  }

}
thePianist([
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

/*unction pianist(data) {
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
} */
/*function solve(input) {
    let num = Number(input.shift());
    let pieces = {}

    for (let i = 0; i < num; i++) {
        let [piece, composer, key] = input.shift().split("|");
        pieces[piece] = {
            composer,
            key
        }
    }
        while (input[0] !== "Stop") {
            let [command, piece, composer, key] = input.shift().split("|");

            switch (command) {
                case "Add":
                    if (!pieces.hasOwnProperty(piece)) {
                        pieces[piece] = {
                            composer,
                            key
                        }
                        console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                        
                    } else {
                        console.log(`${piece} is already in the collection!`);
                    }
                    break;

                case "Remove":
                    if (!pieces.hasOwnProperty(piece)) {
                        console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                    } else {
                        delete pieces[piece];
                        console.log(`Successfully removed ${piece}!`);
                    }

                    break;
                case "ChangeKey":
                    if (!pieces.hasOwnProperty(piece)) {
                        console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                    } else{
                        let newKey = composer;
                        pieces[piece].key = newKey
                    console.log(`Changed the key of ${piece} to ${newKey}!`);
                    }
                    break;
            }
        }
    
     Object.entries(pieces).forEach(([piece, composer,key])=>{
        console.log(`${piece} -> Composer: ${composer.composer}, Key: ${composer.key}`);
     })
}*/