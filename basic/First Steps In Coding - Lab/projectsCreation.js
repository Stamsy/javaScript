function hours(input){
    let name = (input[0]);
    let numberOfProjects = Number(input[1]);
    
    let requiredHours = numberOfProjects * 3;
    let res = `The architect ${name} will need ${requiredHours} hours to complete ${numberOfProjects} project/s.` 
    console.log (res)
} 
hours (["George ","4 "])