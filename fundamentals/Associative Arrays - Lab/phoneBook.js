function phoneBook(input) {
    let phoneBooks = {};

    for (let phones of input) {
        let token = phones.split(" ");
        let name = token[0];
        let phone = token[1];

        phoneBooks[name] = phone;
    }
    for (let key in phoneBooks) {
        console.log(key,"->", phoneBooks[key]);
    }

}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'])
