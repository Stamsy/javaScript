function numbers(arr) {
    let nums = arr.shift().split(" ").map(Number)

    let index = 0;
    let token = arr[index];
    index++;

    while (token !== "Finish") {
      token = token.split(" ")
        let command = token[0]
        let index1 = Number(token[1])
        let index2 = Number(token[2])

        switch (command) {
            case "Add":
                nums.push(index1)
                break;
            case "Remove":
                for (let i = 0; i < nums.length; i++) {
                    if (index1 === nums[i]) {
                        nums.splice(i , 1)
                    }
                }
                break;
            case "Replace":
                for (let j = 0; j < nums.length; j++) {
                    if (index1 === nums[j]) {
                        nums.splice(j, 1, index2);
                       break;
                    }
                }
                break;
            case "Collapse":
                for (let k = 0; k < nums.length; k++) {
                    if (index1 > nums[k]) {
                        nums.splice(k , 1);
                       
                    }
                }
                break;
        }
        token = arr[index];
        index++;
    }
    console.log(nums.join(" "));

}
numbers(["1 20 -1 10",
    "Add 8",
    "Finish"])