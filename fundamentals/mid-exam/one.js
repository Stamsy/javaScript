function cookingMasterclass(input) {
    let buget = Number(input[0]);
    let students = Number(input[1]);
    let priceOfPackageFlour = Number(input[2]);
    let priceOFOneEgg = Number(input[3]);
    let priceApron = Number(input[4])

let neededItems = 0;
 
    for(let i = 0; i< students; i++){
        if(students > 5){
         neededItems = priceApron * (students + Math.ceil(0.20*students)) + priceOFOneEgg * 10 * (students) + priceOfPackageFlour * (students - students/5)
   
    break;
        } else {
         neededItems = priceApron * (students + Math.ceil(0.20*students)) + priceOFOneEgg * 10 * (students) + priceOfPackageFlour * (students)
           
        }
    }
   if(neededItems > buget){
    console.log(`${(neededItems - buget).toFixed(2)}$ more needed.`);
   
   } else  {
    console.log(`Items purchased for ${neededItems.toFixed(2)}$.`);
   }
   
    
}
cookingMasterclass([50,
    2,
    1.0,
    0.10,
    10.0])