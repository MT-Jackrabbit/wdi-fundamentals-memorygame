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

flipCard(0);
flipCard(2);

function flipCard(cardId){

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