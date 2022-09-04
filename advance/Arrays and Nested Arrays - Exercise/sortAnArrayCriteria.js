function solve(input) {
    let twoCriteriaSort = (current, next) =>
        current.length - next.length || current.localeCompare(next);
    input.sort(twoCriteriaSort);
    console.log(input.join('\n'));
}
solve(['alpha', 
'beta', 
'gamma'])