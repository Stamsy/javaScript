function fancyBarcodes(input) {
    let pattern = /(@#{1,})(?<barcode>[A-Z][A-Za-z0-9]{4,}[A-Z])@#{1,}/
    let countBarcodes = Number(input.shift());
    let numberPattern = /[0-9]/g

    for(let i = 0; i < countBarcodes; i++){
        let barcode = input[i]
        let match = pattern.exec(barcode);
        let concat = ""
        while(match != null){
            let newBarcode = match.groups["barcode"];
            let matchBacode = numberPattern.exec(newBarcode)
            if(matchBacode == null){
                console.log(`Product group: 00`);
                break;
            }
            while(matchBacode != null){
                concat += matchBacode
                matchBacode = numberPattern.exec(newBarcode)
            } 
            console.log(`Product group: ${concat}`)
                break;
            }
            if(match == null){
                console.log(`Invalid barcode`);
            }
    }
}
fancyBarcodes(["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"])