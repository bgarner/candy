//this is the random file

// card types

// 2 red
// 2 blue
// 2 yellow
// 2 green
// 2 orange
// 2 purple
// 2 double red
// 2 double blue
// 2 double yellow
// 2 double green
// 2 double orange
// 2 double purple

// wild 1
// wild 2
// wild 3
// wild 4
// wild 5

// bad 1
// bad 2
// bad 3
// bad 4
// bad 5


var deck = [
	"red",
	"blue",
	"yellow",
	"green",
	"orange",
	"purple",
	"double red",
	"double blue",
	"double yellow",
	"double green",
	"double orange",
	"double purple",
	"red",
	"blue",
	"yellow",
	"green",
	"orange",
	"purple",
	"double red",
	"double blue",
	"double yellow",
	"double green",
	"double orange",
	"double purple",
	"red",
	"blue",
	"yellow",
	"green",
	"orange",
	"purple",
	"double red",
	"double blue",
	"double yellow",
	"double green",
	"double orange",
	"double purple",
	"red",
	"blue",
	"yellow",
	"green",
	"orange",
	"purple",
	"double red",
	"double blue",
	"double yellow",
	"double green",
	"double orange",
	"double purple",
	"wild 1",
	"wild 2",
	"wild 3",
	"wild 4",
	"wild 5",
	"wild 6",
	"bad 1",
	"bad 2",
	"bad 3",
	"bad 4",
	"bad 5",
	"bad 6"
];
var used = [];

$('#draw').click(function(){
    draw();
});


var draw = function()
{
	if(deck.length < 1){
		$( ".deckval" ).text( "SHUFFLING" );
		$( ".usedval" ).text( "SHUFFLING" );
		$( ".discardpile" ).text("");
		shuffle();
	} else {
		var card = deck[Math.floor(Math.random()*deck.length)];
		console.log("pulled the '" + card + "' card...");
		used.push(card);
		pulledPos = deck.indexOf(card);
		console.log(pulledPos);
		deck.splice(pulledPos, 1); //remove it from the deck 
		console.log("used pile: " + used.length);
		console.log("deck size: " + deck.length);	
		$( ".deckval" ).text( deck.length );
		$( ".usedval" ).text( used.length );

		$( ".pile" ).text("");		
		deck.forEach(function(element) {

			$( ".pile" ).append( element + "<br />" );			
		});

		$( ".discardpile" ).append( card + "<br />" );
		renderCard(card);
	}
	
}

var shuffle = function()
{
	deck = [
		"red",
		"blue",
		"yellow",
		"green",
		"orange",
		"purple",
		"double red",
		"double blue",
		"double yellow",
		"double green",
		"double orange",
		"double purple",
		"red",
		"blue",
		"yellow",
		"green",
		"orange",
		"purple",
		"double red",
		"double blue",
		"double yellow",
		"double green",
		"double orange",
		"double purple",
		"red",
		"blue",
		"yellow",
		"green",
		"orange",
		"purple",
		"double red",
		"double blue",
		"double yellow",
		"double green",
		"double orange",
		"double purple",
		"red",
		"blue",
		"yellow",
		"green",
		"orange",
		"purple",
		"double red",
		"double blue",
		"double yellow",
		"double green",
		"double orange",
		"double purple",
		"wild 1",
		"wild 2",
		"wild 3",
		"wild 4",
		"wild 5",
		"wild 6",
		"bad 1",
		"bad 2",
		"bad 3",
		"bad 4",
		"bad 5",
		"bad 6"
	];
	used = [];

	console.log('******* SHUFFLING *********');
	console.log('deck: ' + deck.length +', used: '+ used.length );
}

var renderCard = function(card)
{
	$( ".card" ).empty();
	//colours

	console.log("card from the render: " + card);
	switch(card){
		case "red":
		case "double red":
			colour = "red";
			break;

		case "blue":
		case "double blue":
			colour = "blue";
			break;

		case "green":
		case "double green":
			colour = "green";
			break;	

		case "yellow":
		case "double yellow":
			colour = "yellow";
			break;	

		case "orange":
		case "double orange":
			colour = "orange";
			break;	

		case "purple":
		case "double purple":
			colour = "purple";
			break;	

		case "wild 1":
		case "wild 2":
		case "wild 3":
		case "wild 4":
		case "wild 5":
		case "wild 6":				
			colour = "wildcard";
			break;

		case "bad 1":
		case "bad 2":
		case "bad 3":
		case "bad 4":
		case "bad 5":
		case "bad 6":				
			colour = "bad";
			break;			
	}

	//add the colour block
	//$( ".card" ).append( "<div class='colourblock' style='color:"+colour+"'></div>" );
	$( ".card" ).append("<div class='colourblock " + colour + "'></div>");
	
	//double colour
	if(card.startsWith("double")) {
		console.log('it is a double');
		$( ".card" ).append("<div class='colourblock " + colour + "'></div>");
	}

	console.log(colour);

}


console.log("starting deck size: "  + deck.length);


