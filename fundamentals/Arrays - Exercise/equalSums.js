function equalSums(num) {
    let foundNum = "no";
    let arrL = num.length;

    for(let i = 0; i < arrL; i ++){
        let rigthSum = 0;
        let leftSum = 0;

        for(let l = 0; l< i; l++){
            leftSum += num[l];
        }
        for(let r = i + 1; r < arrL; r++){
            rigthSum += num[r]
        }
        
    if(leftSum === rigthSum){
            foundNum = i;
        }
    }
    console.log(foundNum);
    
}
equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])