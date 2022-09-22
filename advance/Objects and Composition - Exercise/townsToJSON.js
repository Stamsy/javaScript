function solve(input){

    let result = [];
    class Town {
        constructor(name, latitude,longtitude){
            this.Town = name;
            this.Latitude = latitude;
            this.Longitude = longtitude;
        }
    }

    for(let i = 1; i < input.length; i++){
        let arr = input[i].split("|").map(t => t.trim()).filter(x => x.length != 0)
        let townName = arr[0];
        let latitude = Number(arr[1]).toFixed(2);
        let longitude = Number(arr[2]).toFixed(2);
        let town = new Town(townName,+latitude,+longitude);
        result.push(town);
        
    }
  return JSON.stringify(result)
}
solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |'])