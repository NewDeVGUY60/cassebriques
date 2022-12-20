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
let brickRowCount = 3;
let brickColumnCount = 5;
let brickWidth = 75;
let brickHeight = 20;
let brickPadding = 10;
let brickOffsetTop = 30;
let brickOffsetLeft = 30;
let bricks = [];
for(let c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(let r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0 };
    }
}

function drawBricks() {
    for(let c=0; c<brickColumnCount; c++) {
        for(let r=0; r<brickRowCount; r++) {
            let brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
            let brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
            bricks[c][r].x = 0;
            bricks[c][r].y = 0;
            ctx.beginPath();
            ctx.rect(0, 0, brickWidth, brickHeight);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
        }
    }
}

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawPaddle();
    drawBall();
    drawBricks();
    x+=dx;
    y+=dy;
    if(x+dx<ballRadius || x+dx>canvas.width-ballRadius){
        dx=-dx;
    }
    if(y + dy < ballRadius) {
        dy = -dy;
    } else if(y + dy > canvas.height-ballRadius) {
        if(x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        }
        else {
            alert("GAME OVER");
            document.location.reload();
            clearInterval(interval);
        }
    }
    
    
    
    if(rightPressed) {
        paddleX += 7;
    }
    else if(leftPressed) {
        paddleX -= 7;
    }
};

const interval = setInterval(draw,10);

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




