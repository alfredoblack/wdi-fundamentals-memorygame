var cardOne ="queen";
var cardTwo ="queen";
var cardThree ="king";
var cardFour ="king";

if (cardTwo === cardFour && cardOne === cardThree){
	alert('Sorry, try again');
}
else if (cardOne === cardTwo && cardThree === cardFour){
	alert('You found a match!');
}


var cards = ['queen', 'queen', 'king','king'];

var cardsInPlay = [ ];

var board=document.getElementById("game-board");

// fuction to get game-board with cards
function createBoard(){

	for(var i=1; i <= cards.length; i++){
		//create new cards in js
		var newCard = document.createElement('div');
		newCard.className ='card';
		newCard.setAttribute ('data-card', cards[i]);
		board.appendChild(newCard);

		newCard.addEventListener ('click', isTwoCards);
		newCard.innerHTML = '<img src= "kingofclubs.png" alt ="King of Clubs">;'
	

	}
};

var isTwoCards = function() {
	cardsInPalay.push(this.getAttribute('data-card'));

	if (cardsInPlay.length === 2){
		isMatch (cardsInPlay);
		// clear cards
		cardsInPlay = [ ];
	}
}

var isMatch = function(){

}
createBoard ();
/*for( var i=1; i <=4; i++){
	var newCard = document.createElement("div");
	newCard.className ="card";
	document.getElementsByTagName("div")[0].appendChild(newCard);
	console.log(i);
}*/


