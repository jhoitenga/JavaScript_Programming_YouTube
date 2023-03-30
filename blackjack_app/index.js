let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;

let player = {
    name: "Emmitt",
    chips: 125
}

// Declaring a variable called message and assigning its value to an empty string
let message = "";
let messageEl = document.getElementById("message-el");
//console.log(messageEl);

// This is another way to call the sum-el element
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.querySelector("#player-el");

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}

// This function is called when the start game button is clicked
function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

// This function renders the game and checks if you have blackjack
function renderGame() {
    if (sum < 21) {
        //console.log("Do you want to draw another card? 🙂");
        message = "Do you want to draw another card? 🙂";
    } else if (sum === 21) {
        //console.log("Congratulations! You got Blackjack! 🥳");
        message = "Congratulations! You got Blackjack! 🥳";
        hasBlackJack = true;
    } else {    
        //console.log("You're out of the game! 😢");
        message = "You're out of the game! 😢";
        isAlive = false;
    }

    // Displaying the message
    messageEl.textContent = message;
    //console.log(message);
    playerEl.textContent = player.name + ": $" + player.chips;
    //console.log(playerEl);

    // Displaying the cards
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += " " + cards[i];
    }
}

// This function deals a new card when the button is clicked
function newCard() {
    //console.log("Drawing a new card...");
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        //console.log(cards);
        renderGame();
    }
}
