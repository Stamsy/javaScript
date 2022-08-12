function solve(input) {
    let pattern = /(\W+)>(?<numbers>\d+)\|(?<lower>[a-z]{3})\|(?<upper>[A-Z]{3})\|[^<>]+<\1/

    let num = Number(input.shift());
    let result = ""

    for (let i = 0; i < num; i++) {
        let chek = input[i];
        let match = chek.match(pattern);
        if (match) {
            let numbers = match.groups["numbers"];
            let lower = match.groups["lower"];
            let upper = match.groups["upper"];
            result += numbers + lower + upper
            console.log(`Password: ${result}`);
        } else {
            console.log(`Try another password!`);
        }
    }
}
solve([
    "3",
    "##>00|no|NO|!!!?<###",
    "##>123|yes|YES|!!!<##",
    "$$<111|noo|NOPE|<<>$$"
]);

/*
  Try another password!
  Password: 123yesYES!!!
  Try another password!
*/