let input = ['handOn', 'hands', 'hanDLes', 'Handcuffs', 'handmade', 'in-hands', 'HANDINGLY'];

let pattern = /^(hand).*(s|y|le)$/i;

let result = input.filter(word => {
    return pattern.test(word);
})

console.log(result);