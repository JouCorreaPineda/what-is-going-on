 // This is your main function that runs when the page loads

var counter = 0
var listOfAllNumbers = []
var userName = prompt("Hello, who is playing?")
var randnum = Math.floor(Math.random() * 10)



play();

function play(){
    var numGuessed = prompt("Guess a number between 0 and 10!")
    counter++
    if(numGuessed == randnum){
        var answer = prompt("Thats correct "+userName+", Its number "+numGuessed+" You did it in "+counter+" tries. Your previous answers were "+listOfAllNumbers+'. Do you want to play again?');
        if(answer.toLowerCase()==="yes"){
            play();
        }else{
            alert("Ok, see you next time!")
        }

    }else if(numGuessed <randnum){
        alert("thats the wrong number "+userName+" guess higher, try again");
        listOfAllNumbers.push(numGuessed);
        play();

    }else if(numGuessed >randnum){
        alert("thats the wrong number "+userName+" guess lower, try again");
        listOfAllNumbers.push(numGuessed)
        play();
    }
}





