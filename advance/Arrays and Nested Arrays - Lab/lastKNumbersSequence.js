function lastKNumbers(n, k) {
    let result = [1];
    
        let num = 0;
        for (let i = 1; i < n; i++) {
            if(result.length < k){
                for(let  j = 0 ; j < k; j ++){
                    num = result.reduce((a,b) => a +b )
                    result.push(num)
                }
               
            } else{
                let newNum = result.slice(-k);
                let sumTwo = newNum.reduce((a,b)=> a+b)
                result.push(sumTwo)
               
            }
            if(result.length === n){
                break;
            }
        
        }
       
        return result;
    }
    

lastKNumbers(8, 2)