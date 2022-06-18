function listOfProducts(input) {
    let sortProduct = input.sort();
    
    for(let i = 0; i< input.length;i++){
    console.log(`${i + 1}.${sortProduct[i]}`);
    }
    
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])