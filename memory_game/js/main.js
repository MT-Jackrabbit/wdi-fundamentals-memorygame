//this array holds the card objects and is constant, the cards never change
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
	cardImage: "images/king-of-diamonds.png"
}
];

let cardPosition = []; //this array holds the randomized cards and is what is displayed to the user
let cardsInPlay = []; //this array holds the two cards that were selected by the user
let gamesPlayed = 0;
let gamesWon = 0;

//adds a 'click' listener to the reset button
document.getElementById('btnReset').addEventListener('click', resetBoard);

/******************************************
* Initalizes the game board when the page
* is first loaded.
*******************************************/
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

/******************************************
* Called when the user clicks on one of the
* cards.  This 'flips' the card over so that
* the user can see what the face value is.
* If two cards have been chosen then it calls
* checkForMatch() to see if the user guessed
* correctly.
*******************************************/
function flipCard(){
	//retrieve the card id
	let cardId = this.getAttribute('data-id');

	//show the face of the card instead of the back
	this.setAttribute('src', cardPosition[cardId].cardImage);

	//add the card to the cardsInPlay[]
	cardsInPlay.push(cardPosition[cardId].rank);

	//console.log("User flipped " + cardPosition[cardId].rank + "\n" + cardPosition[cardId].cardImage + "\n" + cardPosition[cardId].suit);

	if(cardsInPlay.length === 2)
	{
		checkForMatch();	
	}

}

/*********************************************
* Compares the two cards that were chosen
* and lets the user know if they were correct
* in the choice.
**********************************************/
function checkForMatch(){
	if(cardsInPlay[0] === cardsInPlay[1])
	{
		gamesWon++;
		document.getElementById('games-won').textContent = gamesWon;
		alert("You found a MATCH!");
	}
	else
		alert("Sorry NOT A MATCH try again!");

	gamesPlayed++;
	document.getElementById('games-played').textContent = gamesPlayed;
}

/******************************************
* When called it resets the card images
* so that the backs are showing and
* clears the cardsInPlay[] so that
* there is nothing in it.
*******************************************/
function resetBoard(){
	const cardElement = document.getElementsByTagName('img');
	//console.log(cardElement.length);

	for(let i = 0; i < cardElement.length; i++)
	{
		cardElement[i].setAttribute('src', 'images/back.png');
	}

	//clear the cardsInPlay[] so player can start over
	cardsInPlay = [];
	randomizeBoard(4); //randomize the board if the user wants to play again
}

/******************************************
* This function randomizes the cards so that
* a different game is presented to user each
* time the game is played.
*******************************************/
function randomizeBoard(numCards){
	let randomNum = 0;
	let cardsUsed = 0;
	let usedNums = [0, 0, 0, 0];
	cardPosition = [];

	while(cardPosition.length < numCards)
	{
		randomNum = Math.floor((Math.random() * numCards));

		if(usedNums[randomNum] === 0)
		{
			usedNums[randomNum] = 1;
			cardPosition.push(cards[randomNum]);
			cardsUsed++;
			//console.log(cardPosition[cardPosition.length-1].suit + " : " + randomNum);
		}
	}
}

createBoard();
randomizeBoard(4); //randomize the board on load