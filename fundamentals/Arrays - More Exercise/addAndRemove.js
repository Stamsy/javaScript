function addAndRemove(arr) {
    let result = [];
    let arrL = arr.length
    let numCount = 0;
    for (let i = 0; i < arrL; i++) {

        let command = arr[i]
        numCount++
        if (command === "add") {

            result.push(numCount)
        } else {

            result.pop()
        }

    }
    if (result.length === 0) {
        console.log("Empty");
    }

    console.log(result.join(" "));
}
addAndRemove([ 'remove', 'remove','remove'])