//console.log("index.js script run")
const handClose = document.querySelector(".i2")
const handFar = document.querySelector(".i1")


$("body").mousemove(function(event) {
  let posX = event.clientX;
  let posY = event.clientY;
  console.log(posX,posY);
  handClose.style.transform = "translate(" + (posX-680)/130+ "px," + (posY-490)/150+"px)";
  handFar.style.transform = "translate(" + (-posX+680)/130+ "px," + (-posY+490)/150+"px)";
})
