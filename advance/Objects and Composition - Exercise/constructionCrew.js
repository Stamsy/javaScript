function solve(person) {
    
if(person.dizziness ){
    person.levelOfHydrated += person.weight * 0.1 * person.experience;
    person.dizziness = false
}
return person;
}
solve({weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true}
)