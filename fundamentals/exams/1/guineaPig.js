function guineaPig(input) {
    let food = Number(input[0]);
    let hay = Number(input[1]);
    let cover = Number(input[2]);
    let weight = Number(input[3]);
    let day = 0
    for (let i = 0; i < 30; i++) {
        day++
        food -= 0.3;
        if (day % 2 === 0) {
            hay -= food * 0.05;
        }
        if (day % 3 === 0) {
            cover -= weight / 3;
        }
    }
if (food <= 0 || hay <= 0 || cover <= 0) {
            console.log(`Merry must go to the pet store!`);

         
        } else {
            console.log(`Everything is fine! Puppy is happy! Food: ${food.toFixed(2)}, Hay: ${hay.toFixed(2)}, Cover: ${cover.toFixed(2)}.`);
        
    
        }
}
guineaPig(["10",
    "5",
    "5.2",
    "1"])