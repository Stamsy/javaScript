function validate() {
    document.getElementById("email").addEventListener("change", validEmail); // 'change' <=> 'input'
    document.getElementById("email").value;
    const match = /^[a-z]+@[a-z]+\.[a-z]{2,}/gm;
  //   let isValid = false;
  
  //   *** With .addEventListener </change> ***
    
      function validEmail(input) {
        match.test(input.target.value)
          ? input.target.removeAttribute("class")
          : input.target.className = "error";
      }
  
      // *** With .addEventListener </input> ***
  
  //   function validEmail(input) {
  //     if (match.test(input.target.value)) {
  //       isValid = true;    
  //       input.target.removeAttribute("class");
  //     } else {
  //       isValid = false;    
  //       input.target.className = "error";
  //     }
  //   }
  }