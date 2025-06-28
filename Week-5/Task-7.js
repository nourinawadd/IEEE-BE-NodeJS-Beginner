// Game classes
class RPG {
  constructor() {
    this.genre = 'Role-Playing Game';
  }

  play() {
    return `You are playing an ${this.genre}`;
  }
}

class FPS {
  constructor() {
    this.genre = 'First-Person Shooter';
  }

  play() {
    return `You are playing a ${this.genre}`;
  }
}

class Puzzle {
  constructor() {
    this.genre = 'Puzzle Game';
  }

  play() {
    return `You are solving a ${this.genre}`;
  }
}

class GameFactory {
  static createGame(type) {
    switch (type.toLowerCase()) {
      case 'rpg':
        return new RPG();
      case 'fps':
        return new FPS();
      case 'puzzle':
        return new Puzzle();
      default:
        throw new Error('Unknown game type.');
    }
  }
}

const game1 = GameFactory.createGame('rpg');
console.log(game1.play());

const game2 = GameFactory.createGame('fps');
console.log(game2.play());

const game3 = GameFactory.createGame('puzzle');
console.log(game3.play());
