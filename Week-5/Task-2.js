function replaceOddNumbers(inputString) {
    // Regular expression to match odd numbers
    const oddNumberRegex = /\b\d*[13579]\b/g;

    // Replace odd numbers with "BEEP"
    const modifiedString = inputString.replace(oddNumberRegex, 'BEEP');

    return modifiedString;
}

console.log(replaceOddNumbers("I have 12 cars, 11 of which are 89 years old"));