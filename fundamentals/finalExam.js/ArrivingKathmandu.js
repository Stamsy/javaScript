function ArrivingKathmandu(input) {
   let pattern = /^(?<name>[A-Za-z0-9!@#$?]+)=(?<number>\d+)<<(?<code>.+$)/

    let trueName = ""
    while (input[0] !== "Last note") {
        let chek = input.shift()
        let match = chek.match(pattern)
        if(match){
            let name = match.groups["name"]
           
            let num = match.groups["number"]
            let code = match.groups["code"]
            num = Number(num)
            if(num === code.length){
                for(let letter of name){
                    let el = letter.charCodeAt()
                    if( (el >= 65 && el <= 90) || (el >= 97 && el <= 122)){
                        trueName += letter
                    }
                }
                console.log(`Coordinates found! ${trueName} -> ${code}`);
            } 
        
        else{
            console.log(`Nothing found!`);
            continue
        }
       
    } else{
        console.log(`Nothing found!`);
    }
    
    }
       
    
}
ArrivingKathmandu(["!@Ma?na?sl!u@=7<<tv58ycb4845",
"E!ve?rest=.6<<tuvz26",
"!K@2.,##$=4<<tvnd",
"!Shiha@pan@gma##9<<tgfgegu67",
"!###Anna@pur@na##=16<<tv5dekdz8x11ddkc",
"Last note"])