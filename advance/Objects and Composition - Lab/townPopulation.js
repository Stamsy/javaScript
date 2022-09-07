function solve(input) {
    let obj = {};

    for(let i = 0; i < input.length; i++){
        let token = input[i].split(" <-> ");
        let city = token[0];
        let population = Number(token[1]);
        if (!obj.hasOwnProperty(city)) {
            obj[city] = {
                population : 0
            }
           
            obj[city].population = population
        }
        else if (obj.hasOwnProperty(city)){
            obj[city].population += population
        }
        

    }
    Object.entries(obj).forEach(([city,population]) => {
        console.log(` ${city} : ${population.population}`);
    })
}
solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000'])



/*function townPopulation(input) {
 
    let registry = {}
 
    for (let town of input) {
        let [name, population] = town.split(' <-> ')
        population = Number(population)
 
        if (registry[name] !== undefined) {
            population += registry[name]
        }
        registry[name] = population
    }
    for (let towns in registry) {
        console.log(`${towns} : ${registry[towns]}`)
    }
}
townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'])*/