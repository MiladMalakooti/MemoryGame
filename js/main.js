let cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts", 
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit:"diamonds", 
	cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];


var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");

	}
	else {
		alert("Sorry, try again.");
	}
};

var flipCard = function () {
	if (this.getAttribute('class') === "unflipped") {
		var cardId = this.getAttribute('data-id');

		console.log("User flipped " + cards[cardId].rank);

		cardsInPlay.push(cards[cardId].rank);

		console.log(cards[cardId].cardImage);
		console.log(cards[cardId].suit);

		this.setAttribute('src', cards[cardId].cardImage);
		this.setAttribute('class', 'flipped');

		if (cardsInPlay.length === 2) {
			checkForMatch();
		}
	}
	else {
		return alert("Please click on an unflipped card.");
	}
};

   //console.log(cards[cardId].cardImage)

// I used "var" instead of "let"  M.M.
var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.setAttribute('class', 'unflipped');
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	};
};

createBoard();

/*
var reset = function () {
    for (var i = (cardsInPlay.length - 1); i > -1; i--) {
		document.querySelectorAll('.flipped')[i].setAttribute('src', 'images/back.png');

		*/
		

