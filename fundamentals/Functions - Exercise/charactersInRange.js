function charactersInRange(first, second) {

    let start = Math.min(first.charCodeAt(0), second.charCodeAt(0));
    let end = Math.max(first.charCodeAt(0), second.charCodeAt(0));

    let result = []
    for (let i = start + 1; i < end; i++) {
        let current = String.fromCharCode(i);
        result.push(current)

    }
    console.log(result.join(' '));
}
charactersInRange('a', 'd')