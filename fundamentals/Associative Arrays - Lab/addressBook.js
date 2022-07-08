function addressBook(arr) {
    let addressBooks = {}
    for (let names of arr) {
        let [name, address] = names.split(":");

        addressBooks[name] = address

    }
    let entries = Object.entries(addressBooks);
    let sortEntries = entries.sort(([keyA, valueA], [keyB, valueB]) => {
        return keyA.localeCompare(keyB)
    })
    for (let [name, address] of sortEntries) {
        console.log(name, "->", address)
    }
}
addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])