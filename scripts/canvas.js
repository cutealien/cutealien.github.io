var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.font = "16px Arial";
ctx.strokeStyle = '#1DA1F2'

// canvas.addEventListener("mousemove", function(e) { 
//     var cRect = canvas.getBoundingClientRect();        // Gets CSS pos, and width/height
//     var canvasX = Math.round(e.clientX - cRect.left);  // Subtract the 'left' of the canvas 
//     var canvasY = Math.round(e.clientY - cRect.top);   // from the X/Y positions to make  
//     ctx.clearRect(0, 0, canvas.width, canvas.height);  // (0,0) the top left of the canvas
//     ctx.fillText("X: "+canvasX+", Y: "+canvasY, 10, 20);
// });

// ctx.font = "34px serif";
// ctx.textAlign = "center";
// ctx.textBaseline="middle"; 
// ctx.fillStyle = "#FFF";
// ctx.fillText("Hello World",150,50);
let font_file = new FontFace('Fugaz One', 'url(../css/fonts/Fugaz_one/FugazOne-regular.ttf)');

font_file.load().then(() => {
    // font loaded successfully!
    // mycanvas.width = 650;
    // mycanvas.height = 100;
    // const ctx = mycanvas.getContext('2d')

    ctx.font = '36px "Fugaz One"'
    ctx.fillText('Fugaz One font loaded', 20, 50)
    console.log('font loaded');
    },
    (err) => {
        console.error(err)
});

  




function drawLine(startX = 0, startY = 0, endX = canvas.width, endY = canvas.height) {
    ctx.beginPath();      
    ctx.moveTo(startX, startY)
    ctx.lineTo(endX, endY)
    ctx.closePath();
    ctx.stroke()
}

function drawTriangle(x1 = 75, y1 = 50, x2 = 100, y2 = 75, x3 = 100, y3 = 25) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.closePath()
    ctx.stroke();
}

function drawSquare(startX = 50, startY = 50, endX = canvas.width / 2, endY = canvas.height / 2) {
    ctx.strokeRect(startX, startY, endX, endY);
    // ctx.fillRect(startX, startY, endX, endY);
}

function drawCircle(centerX = 50, centerY = 50, radius = 50, startAngle = 0, endAngle = 2 * Math.PI) {
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.stroke(); 
}

drawLine(50, 50)
drawTriangle()
drawSquare()
ctx.rotate(Math.PI / 6);
ctx.fillText('Fugaz One font loaded', 100, 100)
drawTriangle()

drawSquare()
drawCircle()

// const p = new Path2D('M407.72 224c-3.4 0-14.79.1-18 .3l-64.9 1.7a1.83 1.83 0 01-1.69-.9L193.55 67.56a9 9 0 00-6.66-3.56H160l73 161a2.35 2.35 0 01-2.26 3.35l-121.69 1.8a8.06 8.06 0 01-6.6-3.1l-37-45c-3-3.9-8.62-6-13.51-6H33.08c-1.29 0-1.1 1.21-.75 2.43l19.84 71.42a16.3 16.3 0 010 11.9L32.31 333c-.59 1.95-.52 3 1.77 3H52c8.14 0 9.25-1.06 13.41-6.3l37.7-45.7a8.19 8.19 0 016.6-3.1l120.68 2.7a2.7 2.7 0 012.43 3.74L160 448h26.64a9 9 0 006.65-3.55L323.14 287c.39-.6 2-.9 2.69-.9l63.9 1.7c3.3.2 14.59.3 18 .3C452 288.1 480 275.93 480 256s-27.88-32-72.28-32z');
// ctx.stroke(p)

// var done = false
// var count = 0
// var x = 0
// var y = 0
// var start = 0
// var nextTime = 0
// var duration = 100
// var previousTimeStamp

// function animate(timeStamp) {
    
//     const elapsed = timeStamp - start;
//     count++
//     console.log(nextTime, timeStamp, elapsed, count, x, y);

//     if(timeStamp < nextTime) {
//         requestAnimationFrame(animate)
//         return
//     }

//     nextTime = timeStamp + duration

//     ctx.clearRect(0, 0, 600, 600)
//     drawLine(x, y, x + 10, y + 10)

//     x += 10
//     y += 10

//     done = x > 600

//     if(done) {
//         return
//     }
//     requestAnimationFrame(animate)

// }

// requestAnimationFrame(animate)
