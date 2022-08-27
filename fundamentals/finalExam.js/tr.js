function solve(input) {
    let text = input.shift();
    while (text !== 'Last note') {
        let pattern = /^([A-Za-z0-9!@#$?]+)=(\d+)<<(.+)$/;
        let match = text.match(pattern);
        if (match) {
            let length = Number(match[2]);
            let code = match[3];
            if (length === code.length) {
                let name = match[1].replace(/[!@#$?]+/g, '');
                console.log(`Coordinates found! ${name} -> ${code}`);
            } else {
                console.log('Nothing found!');
            }
        } else {
            console.log('Nothing found!');
        }
        text = input.shift();
    }
}
solve(["!@Ma?na?sl!u@=7<<tv58ycb4845",
    "E!ve?rest=.6<<tuvz26",
    "!K@2.,##$=4<<tvnd",
    "!Shiha@pan@gma##9<<tgfgegu67",
    "!###Anna@pur@na##=16<<tv5dekdz8x11ddkc",
    "Last note"])