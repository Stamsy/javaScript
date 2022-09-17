function solve(num, p1, p2, p3, p4, p5) {

    let chop = function () {
        return num / 2;
    }
    let dice = function () {
        return Math.sqrt(num)
    }
    let spice = function () {
        return num + 1
    }
    let bake = function () {
        return num * 3
    }
    let fillet = function () {
        return num * 0.8
    }
    let arr = [p1, p2, p3, p4, p5];

    for (let i = 0; i <= arr.length; i++) {
        let command = arr[i];
        switch (command) {
            case "chop":
                num = chop(num);
                console.log(num);
                break;
            case "dice":
                num = dice(num);
                console.log(num);
                break;
            case "spice":
                num = spice(num);
                console.log(num);
                break;
            case "bake":
                num = bake(num);
                console.log(num);
                break;
            case "fillet":
            num = fillet(num);
            console.log(num.toFixed(2));
                break;

        }
    }
}
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')