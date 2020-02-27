/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }
  
  addPhraseToDisplay() {
    const phraseList = document.querySelector('#phrase ul');
    let singleChars = [...this.phrase];
    singleChars.forEach((char) => {
      if (char === ' ') {
        phraseList.append(`<li class="space">${char}</li>`)
      } else {
        phraseList.append(`<li class="hide letter ${char}">${char}</li>`)
      }
    })
    
  }
}
