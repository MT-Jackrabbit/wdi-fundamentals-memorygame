const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];

flipCard(0);
flipCard(2);

function flipCard(cardId){

	cardsInPlay.push(cards[cardId]);

	console.log("User flipped " + cards[cardId]);

	if(cardsInPlay.length === 2)
	{
		checkForMatch();	
	}

}

function checkForMatch(){
	if(cardsInPlay[0] === cardsInPlay[1])
	{
		console.log("You found a match!");
	}
	else
		console.log("Sorry try again!");
}