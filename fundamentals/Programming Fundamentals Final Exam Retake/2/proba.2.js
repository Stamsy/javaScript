function encryptingPassword(input) {
 
    let n = Number(input.shift())
    let pattern = /(.+)(?<numbers>\d{3})\|(?<lower>[a-z]{3})\|(?<upper>[A-Z]{3})\|(?<symbols>[^<>]{3})(.+)/g
 
    for (let i = 0; i < n; i++) {
        let valid = pattern.exec(input[i])
 
        if (!valid) {
            console.log("Try another password!")
 
        } else {
            let {
                numbers,
                lower,
                upper,
                symbols
            } = valid.groups
            let encryptedPassword = numbers + lower + upper + symbols
            console.log(`Password: ${encryptedPassword}`)
        }
    }
}
encryptingPassword(["3",
    "##>00|no|NO|!!!?<###",
    "##>123|yes|YES|!!!<##",
    "$$<111|noo|NOPE|<<>$$"
])