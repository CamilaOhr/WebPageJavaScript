const links = document.querySelectorAll("ul a");

const body =document.querySelector("body");
const colors =["#202020", "#f2ede4"]


body.style.backgroundColor = "#f2ede4";

body.addEventListener("click", function(){
    const colorIndex = parseInt(Math.random()*colors.length);
    body.style.backgroundColor=colors[colorIndex];
})


$(document).mousemove(function(e){
    $(".pointer").css({left:e.pageX, top:e.pageY});
})