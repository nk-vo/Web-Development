var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
var leftImg = document.querySelector(".img1");
var rightImg = document.querySelector(".img2");
var title = document.querySelector(".container h1");

leftImg.setAttribute("src", "./images/dice" + randomNumber1 + ".png");
rightImg.setAttribute("src", "./images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) title.innerHTML = "Player 1 Wins!";
else if (randomNumber1 < randomNumber2) title.innerHTML = "Player 2 Wins!";
else title.innerHTML = "Draw!";