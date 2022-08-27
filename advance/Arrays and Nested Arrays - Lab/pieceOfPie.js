function solve(arrey, one,two) {
    let start = 0;
    let end = 0;
    if(arrey.includes(one)){
start = arrey.indexOf(one)
    }
    if(arrey.includes(two)){
        end = arrey.indexOf(two)
    }
    let newArrey = arrey.slice(start,end + 1);
    return newArrey;
}

solve(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie')