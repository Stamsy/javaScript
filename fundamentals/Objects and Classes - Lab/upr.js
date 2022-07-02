function objectsDemo() {
    let person = {
        name: "Ivo",
        age: 30,
       
        };
     if(!person.hasOwnProperty('pet')){
        person.pet = "Lasi"
     } if(person.hasOwnProperty('pet')){
        person.age = 100
     }
     console.log(person);
    }



objectsDemo()