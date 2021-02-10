const { fabric } = require("./fabric");

var canvas = new fabric.Canvas("myCanvas");
player_x = 200;
player_y = 200;

block_img_width = 30;
block_img_height = 30;

var player_object = "";
var block_img_object = "";

function playerUpdate(){
    fabric.Image.fromURL("player.png" , function (Img)
    {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y ,
            left: player_x
        });
        canvas.add("player.png")
    }
    );
}

function newImage(get_img){
    fabric.Image.fromURL(get_img , (Img)
    {
        block_img_object = Img;
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.set({
            top: player_y ,
            left: player_x
        });
        canvas.add(block_img_object);
    }
    );
}

window.addEventListener("my_keydown" , myKeydown);

function myKeydown(e){
keyPressed = e.keyCode;
console.log(keyPressed);

if(e.shiftKey == true && keyPressed == "80"){
    console.log ("p and shift are pressed together ")
    block_img_width = block_img_width + 10;
    block_img_height = block_img_height + 10;
    document.getElementById("current_width").innerHTML = block_img_width;
    document.getElementById("current_height").innerHTML = block_img_height;
}

if(e.shiftKey == true && keyPressed == "77"){
    console.log ("m and shift are pressed together ")
    block_img_width = block_img_width - 10;
    block_img_height = block_img_height - 10;
    document.getElementById("current_width").innerHTML = block_img_width;
    document.getElementById("current_height").innerHTML = block_img_height;
}

if(keyPressed == "38"){
    up();
    console.log ("up ");
}
if(keyPressed == "40"){
    down();
    console.log ("down ");
}
if(keyPressed == "37"){
    left();
    console.log ("left ");
}
if(keyPressed == "39"){
    right();
    console.log ("right ");
}
if(keyPressed == "70"){
    newImage("ironman_face.png");
    console.log("f ");
}
if(keyPressed == "66"){
    newImage("spiderman_body.png");
    console.log("b ");
}
if(keyPressed == "76"){
    newImage("hulk_legs.png");
    console.log("l ");
}
if(keyPressed == "82"){
    newImage("thor_right_hand.png");
    console.log("r ");
}
if(keyPressed == "72"){
    newImage("captain_america_left_hand.png");
    console.log("h ");
}
}