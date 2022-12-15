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
const ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];

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

function hitPlayer () {
    const playerCardOne = deck[Math.floor(Math.random()*deck.length)];
    getCardImagePlayer(playerCardOne);
    playerCards.push(playerCardOne)
    playerScore = calculatePointsPlayer(playerCards, playerCards.length)
}

function hitDealer () {
    const dealerCardOne = deck[Math.floor(Math.random()*deck.length)];
    getCardImageDealer(dealerCardOne);
    dealerCards.push(dealerCardOne)
    dealerScore = calculatePointsDealer(dealerCards, dealerCards.length)
}

function hit() {
    hitPlayer()
    hitDealer()
}

function stand () {
    const dealerHit = deck[Math.floor(Math.random()*deck.length)];
    getCardImageDealer(dealerHit)
    dealerCards.push(dealerCardOne)
    dealerScore = calculatePointsDealer(dealerCards, dealerCards.length)
}

const faceCardPoints = (hand = [], score = 0) => {
    for (const card of hand) {
        switch (card.rank) {
            case "ace":
                if (score > 10) score += 1;
                if (score <=10) score =+ 11;
                break;
            case "jack":
                score += 10;
                break;
            case "queen":
                score += 10;
                break;
            case "king":
                score += 10;
                break;
        }
    }
}

function calculatePointsPlayer (arr, size) {
    let score = 0;
    for(let i=0; i<size;i++) {
        score += arr[i].pointValue;
        faceCardPoints(playerCards, 0);
    }
    playerPoints.innerText = score
}

function calculatePointsDealer (arr, size) {
    let score = 0;
    for(let i=0; i<size;i++) {
        score += arr[i].pointValue;
        faceCardPoints(dealerCards, 0);
    }
    dealerPoints.innerText = score
}

window.addEventListener("DOMContentLoaded", () => {
  // Execute after page load
});

dealButton.addEventListener("click", dealHand, calculatePointsDealer, calculatePointsPlayer)
hitButton.addEventListener("click", hit, calculatePointsDealer, calculatePointsPlayer)
standButton.addEventListener("click", stand, calculatePointsDealer, calculatePointsPlayer)

