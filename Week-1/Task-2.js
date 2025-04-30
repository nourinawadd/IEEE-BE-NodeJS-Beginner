// if its a number, multiply by 3
// if its a string, make the first letter uppercase and the rest lowercase

function program(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'string'){
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
        }
        else if (typeof arr[i] === 'number'){
            arr[i] = arr[i] * 3;
        }
    }
    return arr;
}

let arr = [19, "dreams", "PlayGround", 2, "xD", "i"];
program(arr);
console.log(arr);