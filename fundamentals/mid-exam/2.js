function solve(input) {
    let books = input.shift().split(" | ")
    while (input[0] !== "Stop!") {
        let [command, ...rest] = input.shift().split(" ");
        let genre = rest[0]
        switch (command) {

            case "Join":
                if (!books.includes(genre)) {
                    books.push(genre)
                }
                break;

            case "Drop":
                let index = books.indexOf(genre)
                if (books.includes(genre)) {
                    books.splice(index, 1)
                }
                break;
            case "Replace":
                let oldGerne = rest[0];
                let newGerne = rest[1];
                let i = books.indexOf(oldGerne)
                if (books.includes(oldGerne) && !books.includes(newGerne)) {
                    books.splice(i, 1, newGerne)
                }

                break;
            case "Prefer":
                let indexOne = rest[0];
                let indexTwo = rest[1];

                if((indexOne >= 0 && indexOne < books.length) && (indexTwo >= 0 && indexTwo < books.length)){
                    let one = books[indexOne];
                    let two = books[indexTwo];
                books.splice(indexOne,1,two);
                books.splice(indexTwo,1,one)
                }

                break;
        }
    }
    console.log(books.join(" "));
}
solve(["Poetry | Romance", 
"Drop Children", 
"Replace Fantasy Crime", 
"Stop!"])