class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards =[];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;

    // add the rest of the class properties here
  }

  shuffleCards() {
    // ... write your code here
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++;
    if (card1 === card2){
      this.pairsGuessed++;
      return true
    }else {
      return false;
    }
  }

  checkIfFinished() {
    let answer = this.pairsGuessed === (this.cards.length / 2);
    if (answer) {
      return true;
    } else {
      return false;
    }
    // ... write your code here
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
