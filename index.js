
function getDiceNumber(){
    return Math.floor(Math.random()*6)+1;
}
function getDiceImage(){
    return "images/dice"+getDiceNumber()+".png";
}

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];
var result = document.querySelector("h1");

image1.setAttribute("src",getDiceImage());
image2.setAttribute("src",getDiceImage());

if(image1.getAttribute("src") > image2.getAttribute("src")){
    result.innerHTML = "🚩Player One Wins"
}
else if(image2.getAttribute("src") > image1.getAttribute("src")){
    result.innerHTML = "Player Two Wins🚩"
}
else{
    result.innerHTML = "🚩Draw🚩"
}

document.getElementById("startButton").addEventListener('click',function(){
    location.reload();
})