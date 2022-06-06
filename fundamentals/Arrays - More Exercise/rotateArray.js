function rotateArray(arr) {
    
    let arrL = arr.length;
    let rotation = Number(arr[arrL-1])
    arr.pop()
   while(rotation > 0){
    let current = arr.pop()
    arr.push(current)
       rotation--
  }
  console.log(arr.join(' '));
}
rotateArray(['1', '2', '3', '4', '2'])
/*function rotateArray(arr) {
 
    let rotations = arr[arr.length - 1];
    arr.pop();
 
    for (let i = 1; i <= rotations; i++) {
        let current = arr.pop()
        arr.unshift(current)
 
    }
    console.log(arr.join(" "))
}
rotateArray(['1', '2', '3', '4', '2'])*/