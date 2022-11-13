// Letting the programm know if you hit start then Stop should be blacked out
function start()
{
    // inserted a start alert
    alert ("This button Starts")
    document.getElementById("startButton").disable = True;
    document.getElementById("stopButton").disable = False;
    
}
//Letting the programm know if you hit the stop then Start should be blacked out
function stop()
{
    // inserted a stop alerat
    alert ("This button Stops")
    document.getElementById("startButton").disable = False;
    document.getElementById("stopButton").disable = True;
    
}