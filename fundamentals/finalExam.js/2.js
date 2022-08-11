function solve(input) {
    let pattern = /[@#]+(?<color>[a-z]{3,})[@#]?(\W+)\/+(?<number>\d+)\/+/g

    let match = pattern.exec(input[0])
  

    while(match !== null){
        let color = match.groups["color"];
        let number = match.groups["number"];
        console.log(`You found ${number} ${color} eggs!`);
        match = pattern.exec(input[0])
    }
}
solve(['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/'])
