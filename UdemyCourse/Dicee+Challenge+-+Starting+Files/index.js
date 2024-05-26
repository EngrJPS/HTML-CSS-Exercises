let randomNumber1 = Math.floor((Math.random() * 6)  + 1);
let randomNumber2 = Math.floor((Math.random() * 6)  + 1);
let img1 = "./images/dice"+randomNumber1+".png";
let img2 = "./images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[0].setAttribute("src", img1);
document.querySelectorAll("img")[1].setAttribute("src", img2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins 🚩"
}else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩"
}else{
    document.querySelector("h1").innerHTML = "DRAW !!"
}