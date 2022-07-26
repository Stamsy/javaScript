function theImitationGame(input) {
    let message = input.shift();
    
    while (input[0] != 'Decode') {
        let token = input.shift().split("|");
        let command = token[0]

        switch (command) {
            case "Move":
                let indexOne = Number(token[1])
        message = message.substring(indexOne) + message.substring(0,indexOne)
                break;

            case "Insert":
                let index = Number(token[1]);
                message = message.substring(index,token[2]) + token[2] + message.substring(index)
                
                break;
            case "ChangeAll":
               while(message.includes(token[1])){
              message = message.replace(token[1],token[2])
               }
                break;

        }
    }
    console.log(`The decrypted message is: ${message}`);
}
theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
  ])