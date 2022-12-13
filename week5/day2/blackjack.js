const dealerHand = document.getElementById("dealer-hand");
const playerHand = document.getElementById("player-hand");
const dealButton = document.getElementById("deal-button");
const deck = [];
const suits = ["hearts", "spades", "clubs", "diamonds"];
const ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];

const makeDeck = (rank, suit) => {
    const card = {
        rank: rank,
        suit: suit,
        pointValue: rank > 10 ? 10 : rank,
    };
    deck.push(card);
};

function dealHand () {
    const newCard = document.createElement("img")
    newCard.src = "C:\Users\jsskl\Documents\DigitalCrafts\web-ft-11-2022\week5\day2\images\2_of_clubs.png"
    playerHand.push(newCard)
}

for (let suit of suits) {
    for (const rank of ranks) {
    makeDeck(rank, suit);
    }
}

window.addEventListener("DOMContentLoaded", () => {
  // Execute after page load
});

dealButton.addEventListener("click", dealHand)