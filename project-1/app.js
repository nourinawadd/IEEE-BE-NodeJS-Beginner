const readline = require('readline');

class Hangman {
    constructor(wordList, attempts = 10){
        this.wordList = wordList; // list of words to choose from
        this.attempts = attempts; // number of attempts allowed
        this.word = ''; // the word to guess
        this.guesses = []; // letters guessed by the player
        this.currentState = Array(this.word.length).fill('_'); // current state of the word being guessed
    }

    // select a random word from the word list
    selectRandomWord() {
        const randomIndex = Math.floor(Math.random() * this.wordList.length);
        this.word = this.wordList[randomIndex];
    }

    // initialize the game state
    initializeGame(){
        this.selectRandomWord();
        this.attempts = 10;
        this.guesses = [];
        this.currentState = Array(this.word.length).fill('_');
    }

    // make a guess
    // returns 'correct', 'incorrect', or 'already guessed'
    makeGuess(letter){
        letter = letter.toLowerCase();
        if (this.guesses.includes(letter)) {
            return 'already guessed';
        }
        else {
            this.guesses.push(letter);
        }

        if (this.word.includes(letter)) {
            // Add the letter to the current state
            for (let i = 0; i < this.word.length; i++) {
                if (this.word[i] === letter) {
                    this.currentState[i] = letter;
                }
            }
            return 'correct';
        }
        else {
            this.attempts--;
            return 'incorrect';
        }
    }

    // check if the game is over
    // returns true if the game is over, false otherwise
    isGameOver() {
        return this.attempts <= 0 || this.currentState.join('') === this.word;
    }
    
    // get the current state of the word being guessed
    getCurrentState() {
        return this.currentState.join(' ');
    }

    // main game loop
    play(){
        this.initializeGame();
        console.log("Welcome to Hangman!");
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        console.log(`Guess the word: ${this.getCurrentState()}`);
        console.log(`You have ${this.attempts} attempts left.`);
        const askForGuess = () => {
            rl.question('Enter a letter: ', (input) => {
                const result = this.makeGuess(input);
                console.log(result === 'correct' ? 'Good guess!' : result === 'incorrect' ? 'Wrong guess!' : 'You already guessed that letter.');
                console.log(`Current state: ${this.getCurrentState()}`);
                console.log(`Attempts left: ${this.attempts}`);

                if (this.isGameOver()) {
                    if (this.currentState.join('') === this.word) {
                        console.log(`Congratulations! You've guessed the word: ${this.word}`);
                    } else {
                        console.log(`Game over! The word was: ${this.word}`);
                    }
                    rl.close();
                } else {
                    askForGuess();
                }
            });
        };
        askForGuess();
    }
}

// example
const wordList = ['nourin', 'backend', 'coffee', 'music'];
const game = new Hangman(wordList);
game.play();