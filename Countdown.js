
function Countdown()
{

// we need a countdown timer
var count = 10;
// the main loop for the timeout function
for ( i = 0; i <11; i ++){
    setTimeout(function()
    {
        document.write ("Countdown " + count +"<br>");
        // This is the next stuff for change order
          if(count <5){
            
              document.write (" warning,less then 1/2 way there, "+ count +" seconds left <br>");

    }
    count = count-1;
    //finally the delay
},1000* i )
} 
setTimeout (function() {
    alert ("Blast Off !!!!");
},11000)
}
