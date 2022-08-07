function messageDecrypter(input) {
    let num = Number(input.shift());

    let pattern = /^(\$|%)(?<tag>[A-Z][a-z]{2,})\1: \[(?<numOne>\d+)\]\|\[(?<numTwo>\d+)\]\|\[(?<numThree>\d+)\]\|$/g
    let text = ""
    let matchTag = []
    for (let i = 0; i < input.length; i++) {
        let chek = input[i]
        if (match = pattern.exec(chek)) {
            let newMatch = match.groups["tag"];
                let currentSum = 0;
                let one = Number(match.groups["numOne"]);
                let two = Number(match.groups["numTwo"]);
                let three = Number(match.groups["numThree"]);
               one =  String.fromCharCode(one);
               two = String.fromCharCode(two);
               three = String.fromCharCode(three);
               text = one + two + three
            console.log(`${newMatch}: ${text}`);
        } else {
            console.log(`Valid message not found!`);
        }
    }
}

messageDecrypter(["4",
    "$Request$: [73]|[115]|[105]|",
    "%Taggy$: [73]|[73]|[73]|",
    "%Taggy%: [118]|[97]|[108]|",
    "$Request$: [73]|[115]|[105]|[32]|[75]|"])
