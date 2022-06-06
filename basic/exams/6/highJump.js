function highJump(input) {
    let index = 0;
    let targetHeight = Number(input[index]);
    index++;
    let height = targetHeight - 30;
    let counter = 0;

    while (height <= targetHeight) {
        let isSuccess = false;
        for (let i = 0; i < 3; i++) {
            counter++;
            let tempHeight = Number(input[index]);
            index++;

            if (tempHeight > height) {
                isSuccess = true;
                height += 5;
                break;
            }
        }
        if (!isSuccess) {
            console.log(`Tihomir failed at ${height}cm after ${counter} jumps.`);
            break;
        }
    }if(height > targetHeight){
    console.log(`Tihomir succeeded, he jumped over ${targetHeight}cm after ${counter} jumps.`);
    }
}
highJump(["231",
    "205",
    "212",
    "213",
    "228",
    "229",
    "230",
    "235"])