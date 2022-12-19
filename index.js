const canvas = document.querySelector("#myCanvas");
const ctx = canvas.getContext("2d");

// ctx.beginPath();
// ctx.rect(20,40,50,50);
// ctx.fillStyle="#ff0000";
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.arc(240,160,20,0,Math.PI*2);
// ctx.fillStyle="#ffaaff";
// ctx.fill();
// ctx.strokeStyle="#00d6f8";
// ctx.stroke();
// ctx.closePath();

let x = canvas.width/2;
let y = canvas.height -30;
let dx = -4;
let dy = -2; 
const ballRadius = 10;
const paddleHeight = 10;
const paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth)/2;
let rightPressed = false;
let leftPressed = false;


function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawPaddle();
    drawBall();
    x+=dx;
    y+=dy;
    if(y+dy<ballRadius || y+dy>canvas.height-ballRadius){
        dy=-dy;
    }
    if(x+dx<ballRadius || x+dx>canvas.width-ballRadius){
        dx=-dx;
    }
    if(rightPressed) {
        paddleX += 7;
    }
    else if(leftPressed) {
        paddleX -= 7;
    }
};

setInterval(draw,20);

function drawBall(){
    ctx.beginPath();
    ctx.arc(x,y,ballRadius,0,Math.PI*2);
    ctx.fillStyle="#ffaaff";
    ctx.fill();
    // ctx.strokeStyle="#00d6f8";
    // ctx.stroke();
    ctx.closePath();
};

function drawPaddle (){
    ctx.beginPath()
    ctx.rect(paddleX,canvas.height - paddleHeight,paddleWidth,paddleHeight);
    ctx.fillStyle="blue";
    ctx.fill();
    ctx.closePath();

}

document.addEventListener("keydown",keyDownHandler,false);
document.addEventListener("keyup",keyUpHandler,false);

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    };
};

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    };
};




