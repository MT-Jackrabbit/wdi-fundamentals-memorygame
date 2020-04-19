const cards = [
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
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
}
];

const cardsInPlay = [];

function createBoard(){
	for(let i = 0; i < cards.length; i++)
	{
		const cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

function flipCard(){
	let cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);

	cardsInPlay.push(cards[cardId].rank);

	console.log("User flipped " + cards[cardId].rank + "\n" + cards[cardId].cardImage + "\n" + cards[cardId].suit);

	if(cardsInPlay.length === 2)
	{
		checkForMatch();	
	}

}

function checkForMatch(){
	if(cardsInPlay[0] === cardsInPlay[1])
	{
		alert("You found a match!");
	}
	else
		alert("Sorry try again!");
}

createBoard();