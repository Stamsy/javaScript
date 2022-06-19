function searchForNumber(numsOne,numsTwo) {
    
    let takenEl = numsTwo[0];
    let deleteEl = numsTwo[1];
    let searchEl = numsTwo[2];
    let searchCount =0;
    
    let result =  numsOne.slice(0,takenEl);
    result.splice(0,deleteEl)

    for(let i = 0; i < result.length;i++){
        if(result.includes(searchEl)){
            searchCount++
            let del = result.indexOf(searchEl)
            result.splice(del,1)
            i--
        }
    }
    console.log(`Number ${searchEl} occurs ${searchCount} times.`);

}
searchForNumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3])