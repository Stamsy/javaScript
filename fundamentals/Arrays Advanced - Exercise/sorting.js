function sorting(arr) {
    arr = arr.sort((a, b) => b - a);
    let result = [];
   
    for (let i = 0; i < arr.length; i++) {
      let biggest = arr[i];
      arr.shift();
      result.push(biggest);
      let smallest = arr[arr.length - 1];
      arr.pop();
      result.push(smallest)
      i--
    }
    console.log(result.join(' '));
  }
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])