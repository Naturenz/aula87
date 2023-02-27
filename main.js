var canvas = new fabric.Canvas("myCanvas");

playerX = 10;
playerY = 10;

blockImageWidth = 30;
blockImageHeight = 30;

var playerObject = "";
var blockImageObject = "";

//adicior a imagem do personagem
function playerUpdate() {
  fabric.Image.fromURL("assets/player.png", function (Img) {
    playerObject = Img;

    playerObject.scaleToWidth(150);
    playerObject.scaleToHeight(140);
    playerObject.set({
      top: playerY,
      left: playerX,
    });
    canvas.add(playerObject);
  });
}

function newImage(getImage) {
  fabric.Image.fromURL(getImage, function (Img) {
    blockImageObject = Img;

    blockImageObject.scaleToWidth(blockImageWidth);
    blockImageObject.scaleToHeight(blockImageHeight);
    blockImageObject.set({
      top: playerY,
      left: playerX,
    });
    canvas.add(blockImageObject);
  });
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
  keyPressed = e.keyCode ;
  console.log(keyPressed) ;
  if (e.shiftKey == true && keyPressed == "80") {
 
    blockImageWidth = blockImageWidth + 10;
    blockImageHeight = blockImageHeight + 10
    document.getElementById("currentWidth").innerHTML = blockImageWidth
    document.getElementById("currentHeight").innerHTML = blockImageHeight
}
if (e.shiftKey == true && keyPressed == "77") {
 
  blockImageWidth = blockImageWidth - 10;
  blockImageHeight = blockImageHeight - 10
  document.getElementById("currentWidth").innerHTML = blockImageWidth
  document.getElementById("currentHeight").innerHTML = blockImageHeight
} 
 if (keyPressed == "87") {
  up() }
 if (keyPressed == "83") {
  down() }
  if (keyPressed == "65") {
  left() }
  if (keyPressed == "68") {
  right() }

}
