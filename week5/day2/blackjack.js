const dealerHand = document.getElementById("dealer-hand");
const playerHand = document.getElementById("player-hand");
const dealButton = document.getElementById("deal-button");
const hitButton = document.getElementById("hit-button");
const standButton = document.getElementById("stand-button");
const playerPoints = document.getElementById("player-points");
const dealerPoints = document.getElementById("dealer-points");
const deck = [];
const playerCards = [];
const dealerCards = [];
const suits = ["hearts", "spades", "clubs", "diamonds"];
const ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const makeDeck = (rank, suit) => {
    const card = {
        rank: rank,
        suit: suit,
        pointValue: rank > 10 ? 10 : rank,
    };
    deck.push(card);
};

for (let suit of suits) {
    for (const rank of ranks) {
    makeDeck(rank, suit);
    }
}

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
    playerScore = calculatePointsPlayer(playerCards, playerCards.length)
}

function dealDealer () {
    const dealerCardOne = deck[Math.floor(Math.random()*deck.length)];
    getCardImageDealer(dealerCardOne);
    const dealerCardTwo = deck[Math.floor(Math.random()*deck.length)];
    getCardImageDealer(dealerCardTwo);
    dealerCards.push(dealerCardOne, dealerCardTwo)
    dealerScore = calculatePointsDealer(dealerCards, dealerCards.length)
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
    playerScore = calculatePointsPlayer(playerCards, playerCards.length)
    dealerScore = calculatePointsDealer(dealerCards, dealerCards.length)
}

function stand () {
    const dealerHit = deck[Math.floor(Math.random()*deck.length)];
    getCardImageDealer(dealerHit)
}

function calculatePointsPlayer (arr, size) {
    let sum = 0;
    for(let i=0; i<size;i++) {
        sum += arr[i].pointValue;
    }
    playerPoints.append(sum)
    return sum
}

function calculatePointsDealer (arr, size) {
    let sum = 0;
    for(let i=0; i<size;i++) {
        sum += arr[i].pointValue;
    }
    dealerPoints + sum
    return sum
}

window.addEventListener("DOMContentLoaded", () => {
  // Execute after page load
});

dealButton.addEventListener("click", dealHand)
hitButton.addEventListener("click", hit)

