function manOWar(input){
   let statusPirateShip = input.shift().split(">").map(Number);
   let warShip = input.shift().split(">").map(Number);
   let maxHealth = Number(input.shift());

   let index = 0;
   let line = input[index];
   index++;
   while(line !== "Retire"){
       let tokens = line.split(" ");
       let i;

       switch(tokens[0]){
           case "Fire": 
               i = Number(tokens[1]);
               let damage = Number(tokens[2]);
               if (i < 0 || i > warShip.length - 1) {
                   line = input[index];
                   index++;
                   continue;
               }
               warShip[i] -= damage;
               if (warShip[i] <= 0) {
                   return `You won! The enemy ship has sunken.`;
               }
               break;
           case "Defend": 
               i = Number(tokens[1]);
               let endIndex = Number(tokens[2]);
               let dmg = Number(tokens[3])


               if (i < 0 || i > statusPirateShip.length - 1 || endIndex < 0 || endIndex > statusPirateShip.length - 1){
                   line = input[index];
                   index++
                   continue;
               }
               for(let x = i; x <= endIndex; x++){
                   statusPirateShip[x] = statusPirateShip[x] - dmg;
                   if (statusPirateShip[x] <= 0) {
                       return "You lost! The pirate ship has sunken.";
                   }
               }
               break;
           case "Repair":
               i = Number(tokens[1]);
               let health = Number(tokens[2]);
               if (i < 0 || i > statusPirateShip.length - 1) {
                   line = input[index];
                   index++;
                   continue;
               }
               if (statusPirateShip[i] + health <= maxHealth) {
                   statusPirateShip[i] = statusPirateShip[i] + health
               } else {
                   statusPirateShip[i] = maxHealth;
               }
               break;
           case "Status": 
               let breakPoint = maxHealth * 0.20;
               let result = statusPirateShip.filter(el=> el < breakPoint)
               console.log(result.length + " sections need repair.")
               break;
       }

       line = input[index];
       index++;
   }

   let warShipResult = 0;
   let pirateShipResult = 0;
   for(let sections of warShip){
       warShipResult += sections;
   }
   for(let section of statusPirateShip){
       pirateShipResult += section
   }

      return `Pirate ship status: ${pirateShipResult}\nWarship status: ${warShipResult}`


}
manOWar(["12>13>11>20>66",
"12>22>33>44>55>32>18",
"70",
"Fire 2 11",
"Fire 8 100",
"Defend 3 6 11",
"Defend 0 3 5",
"Repair 1 33",
"Status",
"Retire"]);