function test1(){

var fName = prompt("Hey What's your name?");
var myColour = prompt ("Pick a colour " + fName);

if(myColour=="red"){

console.log("ha. this guy likes red");

}
    else if(myColour=="green"){
 console.log("ah, green this guys alright");
    }
else if(myColour=="yellow"){

	console.log("get him something yellow");
}
else{
console.log("that's not a colour");

  }  

}  

function test2(){
  	var age=prompt("how old are you?");

  	if(age <14){
  		alert("That's not too old");

   }
	else if(age==14){
		alert("14 is a good age");

}
	else if(age>14){
		alert("your're older than I thought");

}
	else{
	alert("Not a valid age");

}


}

function pattern1(){

	var i = 1



	for( var i=1; i <= 100; i++)

	{


		if (  i%3 === 0 && i%5 === 0)

		{

		console.log( "FizzBuzz"); 

		}

			else if (i%3===0)
		{

		console.log ("Fizz");
		}

		else if (i%5 ===0)

		{

		console.log("Buzz");
		}

		else

		{
			console.log(i);
		}
	}
}

function pattern2(){

	var x,y,chr;
	for(x=1; x <=6; x++)
    {
    for (y=1; y < x; y++)	
    	{
    	chr=chr+("*");
    	}
    	console.log(chr);
    	chr="";
	}


}




function yourGuess() {

  var guess = document.getElementById("guess").value;
  var guesses = document.getElementById("output");

  if (guess == numToGuess) {
    guesses.value = guesses.value + "\r" + "You have guessed correctly! (" + guess + ")";
  } else if (guess > numToGuess) {
    guesses.value = guesses.value + "\r" + "You guessing too high!(" + guess + ")";
  } else {
    guesses.value = guesses.value + "\r" + "You guessing too low!(" + guess + ")";
  }
}

function showNumberToGuess() {

  if (document.getElementById('show').checked) {
    document.getElementById('numberToGuess').value = numToGuess;
    document.getElementById('Show').style.display = 'inline';
  } else {
    document.getElementById('numberToGuess').value = '';
    document.getElementById('Show').style.display = 'none';
  }
}


function generateNumberToGuess(confirmIt) {
  var guesses = document.getElementById("output");

  if (confirmIt && !confirm('Restart game with new number?')) {
    return;
  }

  guesses.value = '';
  numToGuess = Math.floor(Math.random() * 500);
  guesses.value = "New number generated.\n";


  document.getElementById('numberToGuess').value = '';
  document.getElementById('Show').style.display = 'none';
}

function showGuesses() {
  var guesses = document.getElementById('guesses');
  var btn = document.getElementById('showguesses');

  if (guesses.style.display != 'block') {
    guesses.style.display = 'block';
    btn.value = 'Hide My Guesses';
  } else {
    guesses.style.display = 'none';
    btn.value = 'Show My Guesses';
  }
}

window.onload = function() {
  generateNumberToGuess();
}
