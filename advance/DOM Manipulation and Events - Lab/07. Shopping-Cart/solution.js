function solve() {
   const textArea = document.querySelector("textarea");
   const addButton = [...document.querySelectorAll("div[class=product-add]")];
   addButton.forEach((button) => button.addEventListener("click", addProducts));
   document.getElementsByClassName('checkout')[0].addEventListener('click', checkOut)
   const shoppingCart = [];
   textArea.value = ''
 
   function addProducts(btn) {
     if (btn.target = "BUTTON") {
       const product = btn.target.parentElement.parentElement;
       const productName = product.querySelector(".product-title").textContent;
       const productPrice = Number(product.querySelector(".product-line-price").textContent);
       shoppingCart.push({
         productName,
         productPrice,
       });
       textArea.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
    }
   }
   function checkOut() {
    let finalProducts = new Set();
    shoppingCart.forEach(product => finalProducts.add(product.productName));
    let finalSum = shoppingCart.reduce((a, b) => a + b.productPrice, 0);
    textArea.value += `You bought ${[...finalProducts.keys()].join(', ')} for ${finalSum.toFixed(2)}.`
    document.getElementsByClassName('checkout')[0].disabled = true;
    [...document.getElementsByTagName("button")].forEach(button => button.disabled = true);
   }
 }