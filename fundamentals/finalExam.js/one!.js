function solve(input) {
 
    let email = input.shift()
 
 
    while (input[0] !== 'Complete') {
        let [command, ...rest] = input.shift().split(' ')
 
        switch (command) {
            case 'Make':
                let restCommand = rest[0];
 
                if (restCommand === "Upper") {
                    email = email.toUpperCase()
                    console.log(email);
                } else {
                    email = email.toLowerCase()
                    console.log(email);
                }
 
                break;
 
            case 'GetDomain':
                let count = Number(rest[0])
                let domain = email.slice(-count)
                console.log(domain)
                break;
                case 'GetUsername':
                    let index = email.indexOf("@")
                    email = email.substring(0,index)
                    console.log(email)
                    break;
        }
    }
 
}
solve(["Mike123@somemail.com",
    "Make Upper",
    "GetDomain 3",
    "GetUsername",
    "Encrypt",
    "Complete"])