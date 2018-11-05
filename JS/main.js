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