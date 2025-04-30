// takes a string s and prints it again after reversing it and making all vowel letters uppercase.

function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}

function makeVowelsUppercase(str) {
    for(let i=0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            str = str.replace(str[i], str[i].toUpperCase());
        }
    }
    return str;
}

let s = "Hey There, I'm glad to have you";

let reversedString = reverseString(s);
let result = makeVowelsUppercase(reversedString);
console.log(result);