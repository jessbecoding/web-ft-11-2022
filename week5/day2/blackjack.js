const dealerHand = document.getElementById("dealer-hand");
const playerHand = document.getElementById("player-hand");
const dealButton = document.getElementById("deal-button");
const hitButton = document.getElementById("hit-button");
const standButton = document.getElementById("stand-button");
const playerPoints = document.getElementById("player-points");
const deck = [];
const playerCards = [];
const dealerCards = [];
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

function getCardImagePlayer (card) {
    const cardImage = document.createElement("img");
    cardImage.src = `./images/${card.rank}_of_${card.suit}.png`;
    playerHand.append(cardImage)
}

function getCardImageDealer (card) {
    const cardImage = document.createElement("img");
    cardImage.src = `./images/${card.rank}_of_${card.suit}.png`;
    dealerHand.append(cardImage)
}

function dealPlayer () {
    const playerCardOne = deck[Math.floor(Math.random()*deck.length)];
    getCardImagePlayer(playerCardOne);
    const playerCardTwo = deck[Math.floor(Math.random()*deck.length)];
    getCardImagePlayer(playerCardTwo);
    playerCards.push(playerCardOne, playerCardTwo)
}

function dealDealer () {
    const dealerCardOne = deck[Math.floor(Math.random()*deck.length)];
    getCardImageDealer(dealerCardOne);
    const dealerCardTwo = deck[Math.floor(Math.random()*deck.length)];
    getCardImageDealer(dealerCardTwo);
}

function dealHand () {
    dealPlayer();
    dealDealer();
}

function hit () {
    const hitCard = deck[Math.floor(Math.random()*deck.length)];
    getCardImagePlayer(hitCard);
    const dealerHit = deck[Math.floor(Math.random()*deck.length)];
    getCardImageDealer(dealerHit)
    playerScore = calculatePoints(playerCards, playerCards.length)
    playerPoints.append(playerScore)
}

function stand () {
    const dealerHit = deck[Math.floor(Math.random()*deck.length)];
    getCardImageDealer(dealerHit)
}

function calculatePoints (arr, size) {
    let sum = 0;
    for(let i=0; i<size;i++) {
        sum += arr[i].pointValue;
    }
    console.log(sum)
    return sum
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
hitButton.addEventListener("click", hit)