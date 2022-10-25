var randomNumber1 = Math.floor(Math.random()*6+1);
var randomNumber2 = Math.floor(Math.random()*6+1);
// FOR IMAGE 1
if (randomNumber1 === 2){
  document.querySelector(".img1").setAttribute("src","images/dice2.png");
}
else if(randomNumber1 === 3){
  document.querySelector(".img1").setAttribute("src","images/dice3.png");
}
else if(randomNumber1 === 4){
  document.querySelector(".img1").setAttribute("src","images/dice4.png");
}
else if(randomNumber1 === 5){
  document.querySelector(".img1").setAttribute("src","images/dice5.png");
}
else if(randomNumber1 === 1){
  document.querySelector(".img1").setAttribute("src","images/dice1.png");
}
else{document.querySelector(".img1").setAttribute("src","images/dice6.png");}

// FOR IMAGE 2

if (randomNumber2 === 2){
  document.querySelector(".img2").setAttribute("src","images/dice2.png");
}
else if(randomNumber2 === 3){
  document.querySelector(".img2").setAttribute("src","images/dice3.png");
}
else if(randomNumber2 === 4){
  document.querySelector(".img2").setAttribute("src","images/dice4.png");
}
else if(randomNumber2 === 5){
  document.querySelector(".img2").setAttribute("src","images/dice5.png");
}
else if(randomNumber2 === 1){
  document.querySelector(".img2").setAttribute("src","images/dice1.png");
}
else{document.querySelector(".img2").setAttribute("src","images/dice6.png");}

// DECLAIRING WINNER

if( randomNumber1 > randomNumber2){
  document.querySelector("h1").textContent="🚩Player 1 Wins.";
  document.querySelector("h1").fontSize = "2.5rem";
}
 else if( randomNumber2 > randomNumber1){
  document.querySelector("h1").textContent="Player 2 Wins.🚩";
  document.querySelector("h1").paddingRight= "40px";
}
else{
  document.querySelector("h1").textContent="Draw!!";
}
