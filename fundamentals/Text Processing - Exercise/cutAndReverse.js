function cutAndReverse(str) {

    let leftHalf = str
        .substring(0, str.length/2)
        .split("")
        .reverse()
        .join("");

    let rigthHalf = str
        .substring(str.length/2)  
        .split("")  
        .reverse()
        .join("")
    console.log(leftHalf);
    console.log(rigthHalf);
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')