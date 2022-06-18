function sortAnArrayBy2Criteria(input) {
    let sort = input.sort(function(a,b){
        return a.length -b.length || a.localeCompare(b);
    })
    console.log(sort.join("\n"));
}
sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma'])