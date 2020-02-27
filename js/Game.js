/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.activePhase = null;
    this.phrases = this.createPhrases();
  }
  
  createPhrases() {
    let newPhrase = [];
    let newPhrase0 = new Phrase('Shiny black coupe at night look like a goblin');
    let newPhrase1 = new Phrase('All I need is one mic');
    let newPhrase2 = new Phrase('You shouldnt throw stones if you live in a glass house');
    let newPhrase3 = new Phrase('But my plan is to show you that I understand');
    let newPhrase4 = new Phrase('Money power respect what you need in life');
    newPhrase.push(newPhrase0,newPhrase1,newPhrase2,newPhrase3,newPhrase4);
    return newPhrase;
  }

  getRandomPhrase() {
    let i = Math.floor(Math.random() * 5);
    return this.phrases[i];
  }

}


