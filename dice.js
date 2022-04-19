var randomNumber1= Math.floor(Math.random()*6)+1;
var diceImage= "dice" + randomNumber1 + ".png";
var imageSrc= "images/" + diceImage;

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",imageSrc);

var randomNumber2= Math.floor(Math.random()*6)+1;
var diceImage= "dice" + randomNumber2 + ".png";
var imageSrc= "images/" + diceImage;

document.querySelectorAll("img")[1].setAttribute("src",imageSrc);




if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 is the winner!";
}
else if (randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}
