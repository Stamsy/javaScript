function commonElements(arrOne, arrTwo) {

    for (let i = 0; i < arrOne.length; i++) {
        let word = arrOne[i];
        for (let j = 0; j < arrTwo.length; j++) {
            if (word === arrTwo[j])
                console.log(word);
        }
    }

}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2'])