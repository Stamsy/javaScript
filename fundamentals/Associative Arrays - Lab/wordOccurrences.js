function wordOccurrences(arr) {
    let result = new Map();

    for (let word of arr) {
        let currentWord = word;

        if (result.has(currentWord)) {
            let sum = result.get(currentWord) + 1;
            result.set(currentWord, sum);
        } else {
            result.set(currentWord, 1)
        }

    }
    let sortedResult = Array.from(result.entries()).sort((a, b) => b[1] - a[1]);

    for (let currentWord of sortedResult) {
        console.log(`${currentWord[0]} -> ${currentWord[1]} times`);
    }
}
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])

