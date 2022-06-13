function radioCrystals(arr) {
 
    let targetThickness = arr[0];
 
    for (let i = 1; i < arr.length; i++) {
        let currentCrystal = arr[i];
 
        let countCuts = 0;
        let countLaps = 0;
        let countGrinds = 0;
        let countEtchs = 0;
        let countXray = 0;
        let cut = (currentCrystal) => currentCrystal / 4;
        let lap = (currentCrystal) => currentCrystal * 0.80;
        let grind = (currentCrystal) => currentCrystal - 20;
        let etch = (currentCrystal) => currentCrystal - 2;
        let xRay = (currentCrystal) => currentCrystal + 1;
 
        while (currentCrystal !== targetThickness) {
            console.log(`Processing chunk ${currentCrystal} microns`);
            while (currentCrystal / 4 >= targetThickness) {
                currentCrystal = cut(currentCrystal);
                countCuts++;
            }
            if (countCuts !== 0) {
                currentCrystal = Math.floor(currentCrystal);
                console.log(`Cut x${countCuts}\nTransporting and washing`);
            }
            while (currentCrystal * 0.8 >= targetThickness) {
                currentCrystal = lap(currentCrystal);
                countLaps++;
            }
            if (countLaps !== 0) {
                console.log(`Lap x${countLaps}\nTransporting and washing`);
                currentCrystal = Math.floor(currentCrystal);
            }
            while (currentCrystal - 20 >= targetThickness) {
                currentCrystal = grind(currentCrystal);
                countGrinds++;
            }
            if (countGrinds !== 0) {
                console.log(`Grind x${countGrinds}\nTransporting and washing`)
                currentCrystal = Math.floor(currentCrystal);
            }
            while (currentCrystal > targetThickness) {
                currentCrystal = etch(currentCrystal);
                countEtchs++;
            }
            if (countEtchs !== 0) {
                console.log(`Etch x${countEtchs}\nTransporting and washing`)
                currentCrystal = Math.floor(currentCrystal);
            }
 
            if (currentCrystal < targetThickness) {
                currentCrystal = xRay(currentCrystal);
                countXray++;
            }
            if (countXray !== 0) {
                console.log(`X-ray x${countXray}`)
                currentCrystal = Math.floor(currentCrystal);
            }
            if (currentCrystal == targetThickness) {
                console.log(`Finished crystal ${currentCrystal} microns`);
            }
 
        }
    }
}

radioCrystals([1375, 50000])