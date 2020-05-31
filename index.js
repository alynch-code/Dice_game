var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var img1 = document.querySelectorAll("img")[0];
var img2 = document.querySelectorAll("img")[1];

var diceImage1 = "dice"+randomNumber1+".png";
var diceImage2 = "dice"+randomNumber2+".png";

var title = document.querySelector("h1");

img1.setAttribute("src", diceImage1);
img2.setAttribute("src", diceImage2);

if(randomNumber2<randomNumber1){
  title.textContent = "Player 1 Wins!";
}
else if(randomNumber2>randomNumber1){
  title.textContent = "Player 2 Wins!";
}
else{
  title.textContent = "Draw!";
}
