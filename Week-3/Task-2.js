let player = {
    name: "Samir Kamona",
    club: "Al Ahly",
    score: 25
}

let fantasyPlayer = {
    ...player,
    score: 50,
    position: 'ST'
}

console.log(fantasyPlayer);