function landScaping (input){
    let price = Number(input[0]);
    let finalPrice = price * 7.61;
    let discount = finalPrice * 0.18;
    let total = finalPrice - discount
    let textPrice = `The final price is: ${total} lv.`
    let textDiscount =`The discount is: ${discount} lv.`

    console.log(textPrice)
    console.log(textDiscount)
}
landScaping (["550"])