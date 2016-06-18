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

var board = document.getElementById("game-board");

// fuction to get game-board with cards
function createBoard(){

	for(var i=1; i <= cards.length; i++){
		//create new cards in js
		var newCard = document.createElement('div');
		newCard.className ='card';
		//setting the card's 'data-card' to be the element of the array
		newCard.setAttribute ('data-card', cards[i]);
		board.appendChild(newCard);
		//checking if card clicked is queen or king
		//newCard.addEventListener ('click', kingOrQueen);
		// when a card is clicked the function isTwoCards will be executed
		newCard.addEventListener ('click', isTwoCards);
	
	}
}

/*var kingOrQueen = function {
	if (this.getAttribute('data-card'))=== ('queen') {
		newCard.innerHTML ='< img src= "queenofhearts.png" alt= "Queen of Hearts">'
	}

	else {
		newCard.innerHTML = '<img src= "kingofclubs.png" alt ="King of Clubs">'
	}
};*/
//checking if there are two cards in play
var isTwoCards = function() {

	cardsInPlay.push(this.getAttribute('data-card'));
	//console.log(this.getAttribute ('data-card'));

		if (this.getAttribute('data-card')) === ('queen') {
		this.innerHTML ='< img src= "queenofhearts.png" alt= "Queen of Hearts">'
	}

	else {
		this.innerHTML = '<img src= "kingofclubs.png" alt ="King of Clubs">'
	};

			if (cardsInPlay.length === 2){
				isMatch (cardsInPlay);
		
				// clear cards
				cardsInPlay = [ ];
	}
}
//function to check if two cards in play match
var isMatch = function(){
	if (cardsInPlay[0].getAttribute('data-card')) ===  (cardsInPlay[1].getAttribute('data-card')){
	alert('You found a match!');
	}
else {
	alert('sorry try again');
	}

};
createBoard ();
/*for( var i=1; i <=4; i++){
	var newCard = document.createElement("div");
	newCard.className ="card";
	document.getElementsByTagName("div")[0].appendChild(newCard);
	console.log(i);
}*/


