// takes a string and an array of forbidden letters. Your program should print the string after removing the forbidden letters from it and make all letters separated by hiphens -.

function removeForbiddenLetters(str, forbiddenLetters) {
    let pattern = new RegExp("[" + forbiddenLetters.join("") + "]", "gi");
    let filtered = str.replace(pattern, "");
    return filtered.split("").join("-");
}

let text = "Please";
let forbiddenLetters = ['r', 'x', 'p', 'a'];

let result = removeForbiddenLetters(text, forbiddenLetters);
console.log(result);