/**
 * Global variables
 */
const CANVAS_HEIGHT = 300
const CANVAS_WIDTH = 300
const CANVAS_PADDING = 30

const BIG_SQUARE = 0.8
const SMALL_SQUARE = 0.2

const COLOR_FILL_BLUE = '#1DA1F2'
const COLOR_STROKE_BLUE = '#16252d'

const COLOR_FILL_GREEN = '#17d28c'
const COLOR_STROKE_GREEN = '#084a31'

const COLOR_FILL_PURPLE = '#b631c1'
const COLOR_STROKE_PURLPLE = '#5c1a62'

let f = new FontFace('Fugaz One', 'url(../css/fonts/Fugaz_one/FugazOne-regular.ttf)');

f.load().then(function(a) {
  console.log('font', a);
});


/**
 * Functions
 */
function setFont(height = '24px', fontStyle = 'Fugaz One', color = '#000', ctx) {
    ctx.font = `${height} ${fontStyle}`
    ctx.fillStyle = color
    resetoColor(ctx)
}

function resetoColor(ctx) {
    ctx.strokeStyle = '#000'
    ctx.fillStyle = '#000'
}
function writeText(text = 'Mimi', startX = 50, startY = 50, ctx) {
    ctx.fillText(text, startX, startY);
}

function drawSquare(startX = 50, startY = 50, width = canvas.width / 2, height = canvas.height / 2, colorLine = '#16252d', colorFill = '#1DA1F2', ctx) {
    ctx.strokeStyle = colorLine
    ctx.fillStyle = colorFill
    ctx.fillRect(startX, startY, width, height)
    ctx.strokeRect(startX, startY, width, height)
    resetoColor(ctx)
}

/**
 * First canvas
 */
var canvas1 = document.getElementById("canvas-1")
var ctx1 = canvas1.getContext("2d")
setFont('24px', 'Fugaz One', '#000', ctx1)

drawSquare(
    CANVAS_PADDING, 
    CANVAS_PADDING, 
    canvas1.width * 0.8, 
    canvas1.height * 0.8,
    '#000',
    '#fff',
    ctx1
)

var posX = (canvas1.width * 0.1 + canvas1.width * 0.8) / 2
var posY = canvas1.height * 0.1 - 5
writeText('a', posX, posY, ctx1)

/**
 * Second canvas
 */

var canvas2 = document.getElementById("canvas-2")
var ctx2 = canvas2.getContext("2d")

setFont('24px', 'Fugaz One', '#000', ctx2)
 
drawSquare(
    canvas2.width * 0.1, 
    canvas2.height * 0.1, 
    // canvas2.width * 0.8, 
    // canvas2.height * 0.8,
    240,
    240,
    '#16252d',
    '#1DA1F2',
    ctx2
)

drawSquare(
    canvas2.width * 0.6 + canvas2.width * 0.1, 
    canvas2.height * 0.6 + canvas2.height * 0.1, 
    canvas2.width * 0.2, 
    canvas2.height * 0.2,
    '#16252d',
    'red',
    ctx2
)

posX = (canvas2.width * 0.1 + canvas2.width * 0.8) / 2
posY = canvas2.height * 0.1 - 5
writeText('a', posX, posY, ctx2)

posX = canvas2.width * 0.7 + canvas2.width * 0.2 / 2 - 5 
posY = canvas2.height * 0.9 + 24
writeText('b', posX, posY, ctx2)

/**
 * Third canvas
 */
var canvas3 = document.getElementById("canvas-3")
var ctx3 = canvas3.getContext("2d")

setFont('24px', 'Fugaz One', '#000', ctx3)

drawSquare(
    canvas3.width * 0.1, 
    canvas3.height * 0.1, 
    // canvas3.width * 0.8, 
    // canvas3.height * 0.8,
    240,
    240,
    'transparent',
    '#1DA1F2',
    ctx3
)

drawSquare(
    canvas3.width * 0.6 + canvas3.width * 0.1, 
    canvas3.height * 0.6 + canvas3.height * 0.1, 
    canvas3.width * 0.2, 
    canvas3.height * 0.2,
    'transparent',
    '#fff',
    ctx3
)

ctx3.strokeStyle = '#000'

ctx3.beginPath();
ctx3.moveTo(canvas3.width * 0.1, canvas3.width * 0.1,);
ctx3.lineTo(canvas3.width * 0.1, canvas3.width * 0.9);
ctx3.lineTo(canvas3.width * 0.7, canvas3.width * 0.9);
ctx3.lineTo(canvas3.width * 0.7, canvas3.width * 0.7);
ctx3.lineTo(canvas3.width * 0.9, canvas3.width * 0.7);
ctx3.lineTo(canvas3.width * 0.9, canvas3.width * 0.1);
ctx3.closePath()
ctx3.stroke();


posX = (canvas3.width * 0.1 + canvas3.width * 0.8) / 2
posY = canvas3.height * 0.1 - 5
writeText('a', posX, posY, ctx3)

posX = canvas3.width * 0.7 + canvas3.width * 0.2 / 2 - 5 
posY = canvas3.height * 0.7 - 5
writeText('b', posX, posY, ctx3)

posX = canvas3.width * 0.7 - 18 
posY = canvas3.height * 0.8 + 6
writeText('b', posX, posY, ctx3)

/**
 * Fourth canvas
 */

var canvas4 = document.getElementById("canvas-4")
var ctx4 = canvas4.getContext("2d")

setFont('24px', 'Fugaz One', '#000', ctx4)

drawSquare(
    canvas4.width * 0.1, 
    canvas4.height * 0.1, 
    canvas4.width * BIG_SQUARE, 
    canvas4.height * (BIG_SQUARE - SMALL_SQUARE),
    COLOR_STROKE_BLUE,
    COLOR_FILL_BLUE,
    ctx4
)

drawSquare(
    canvas4.width * 0.1, 
    canvas4.height * 0.1 + canvas4.height * (BIG_SQUARE - SMALL_SQUARE), 
    canvas4.width * (BIG_SQUARE - SMALL_SQUARE), 
    canvas4.height * SMALL_SQUARE,
    COLOR_STROKE_GREEN,
    COLOR_FILL_GREEN,
    ctx4
)

posX = (canvas4.width * 0.1 + canvas4.width * 0.8) / 2
posY = canvas4.height * 0.1 - 5
writeText('a', posX, posY, ctx4)

// posX = canvas4.width * 0.7 + canvas4.width * 0.2 / 2 - 5 
// posY = canvas4.height * 0.7 - 5
// writeText('b', posX, posY, ctx4)

posX = canvas4.width * 0.7 - 18 
posY = canvas4.height * 0.8 + 6
writeText('b', posX, posY, ctx4)

posX = canvas4.width * 0.1 - 24
posY = canvas4.height * BIG_SQUARE / 2
writeText('c', posX, posY, ctx4)

posX = canvas4.width * (BIG_SQUARE - SMALL_SQUARE) / 2 + 12
posY = canvas4.height * (0.1 + BIG_SQUARE) + 24
writeText('d', posX, posY, ctx4)


/**
 * Fifth canvas
*/

var canvas5 = document.getElementById("canvas-5")
var ctx5 = canvas5.getContext("2d")

setFont('24px', 'Fugaz One', '#000', ctx5)

drawSquare(
    canvas5.width * 0.1, 
    canvas5.height * 0.1, 
    canvas5.width * BIG_SQUARE, 
    canvas5.height * (BIG_SQUARE - SMALL_SQUARE),
    COLOR_STROKE_BLUE,
    COLOR_FILL_BLUE,
    ctx5
)

drawSquare(
    canvas5.width * 0.1, 
    canvas5.height * 0.1 + canvas5.height * (BIG_SQUARE - SMALL_SQUARE), 
    canvas5.width * (BIG_SQUARE - SMALL_SQUARE), 
    canvas5.height * SMALL_SQUARE,
    COLOR_STROKE_GREEN,
    COLOR_FILL_GREEN,
    ctx5
)

posX = (canvas5.width * 0.1 + canvas5.width * 0.8) / 2
posY = canvas5.height * 0.1 - 5
writeText('a', posX, posY, ctx5)

// posX = canvas5.width * 0.7 + canvas5.width * 0.2 / 2 - 5 
// posY = canvas5.height * 0.7 - 5
// writeText('b', posX, posY, ctx5)

posX = canvas5.width * 0.7 - 18 
posY = canvas5.height * 0.8 + 6
writeText('b', posX, posY, ctx5)

posX = canvas5.width * 0.1 + 8
posY = canvas5.height * BIG_SQUARE / 2
writeText('a-b', posX, posY, ctx5)

posX = canvas5.width * (BIG_SQUARE - SMALL_SQUARE) / 2 + 12
posY = canvas5.height * (0.1 + BIG_SQUARE) + 24
writeText('a-b', posX, posY, ctx5)


/**
 * Sixth canvas
*/

var canvas6 = document.getElementById("canvas-6")
var ctx6 = canvas6.getContext("2d")

setFont('24px', 'Fugaz One', '#000', ctx6)
ctx6.scale(0.9, 0.9)
ctx6.translate(-10, 0)

drawSquare(
    canvas6.width * 0.1, 
    canvas6.height * 0.1, 
    canvas6.width * BIG_SQUARE, 
    canvas6.height * (BIG_SQUARE - SMALL_SQUARE),
    COLOR_STROKE_BLUE,
    COLOR_FILL_BLUE,
    ctx6
)

drawSquare(
    canvas6.width * 0.1, 
    canvas6.height * 0.1 + canvas6.height * (BIG_SQUARE - SMALL_SQUARE), 
    canvas6.width * (BIG_SQUARE - SMALL_SQUARE), 
    canvas6.height * SMALL_SQUARE,
    COLOR_STROKE_GREEN,
    COLOR_FILL_GREEN,
    ctx6
)

drawSquare(
    canvas6.width * 0.1 + canvas6.width * BIG_SQUARE,
    canvas6.height * 0.1,
    canvas6.width * SMALL_SQUARE,
    canvas6.height * (BIG_SQUARE - SMALL_SQUARE),
    COLOR_STROKE_PURLPLE,
    COLOR_FILL_PURPLE,
    ctx6
)

posX = (canvas6.width * 0.1 + canvas6.width * 0.8) / 2
posY = canvas6.height * 0.1 - 5
writeText('a', posX, posY, ctx6)

// posX = canvas6.width * 0.7 + canvas6.width * 0.2 / 2 - 5 
// posY = canvas6.height * 0.7 - 5
// writeText('b', posX, posY, ctx6)

posX = canvas6.width * 0.7 - 18 
posY = canvas6.height * 0.8 + 6
writeText('b', posX, posY, ctx6)

posX = canvas6.width * 0.1 + 8
posY = canvas6.height * BIG_SQUARE / 2
writeText('a-b', posX, posY, ctx6)

posX = canvas6.width * (BIG_SQUARE - SMALL_SQUARE) / 2 + 12
posY = canvas6.height * (0.1 + BIG_SQUARE) + 24
writeText('a-b', posX, posY, ctx6)

posX = canvas6.width * (BIG_SQUARE + 0.1) + canvas6.width * SMALL_SQUARE / 2 - 6
posY = canvas6.height * 0.7 - 5
writeText('b', posX, posY, ctx6)


/**
 * Seventh canvas
 */

 var canvas7 = document.getElementById("canvas-7")
 var ctx7 = canvas7.getContext("2d")
 
 setFont('24px', 'Fugaz One', '#000', ctx7)
 ctx7.scale(0.9, 0.9)
 ctx7.translate(-10, 0)
 
 drawSquare(
     canvas7.width * 0.1, 
     canvas7.height * 0.1, 
     canvas7.width * BIG_SQUARE, 
     canvas7.height * (BIG_SQUARE - SMALL_SQUARE),
     COLOR_STROKE_BLUE,
     COLOR_FILL_BLUE,
     ctx7
 )
 
//  drawSquare(
//      canvas7.width * 0.1, 
//      canvas7.height * 0.1 + canvas7.height * (BIG_SQUARE - SMALL_SQUARE), 
//      canvas7.width * (BIG_SQUARE - SMALL_SQUARE), 
//      canvas7.height * SMALL_SQUARE,
//      COLOR_STROKE_GREEN,
//      COLOR_FILL_GREEN,
//      ctx7
//  )
 
drawSquare(
    canvas7.width * 0.1 + canvas7.width * BIG_SQUARE,
    canvas7.height * 0.1,
    canvas7.width * SMALL_SQUARE,
    canvas7.height * (BIG_SQUARE - SMALL_SQUARE),
    COLOR_STROKE_BLUE,
    COLOR_FILL_BLUE,
    ctx7
)

posX = (canvas7.width * 0.1 + canvas7.width * 0.8) / 2
posY = canvas7.height * 0.1 - 5
writeText('a', posX, posY, ctx7)

// posX = canvas7.width * 0.7 + canvas7.width * 0.2 / 2 - 5 
// posY = canvas7.height * 0.7 - 5
// writeText('b', posX, posY, ctx7)

// posX = canvas7.width * 0.7 - 18 
// posY = canvas7.height * 0.8 + 6
// writeText('b', posX, posY, ctx7)

posX = canvas7.width * 0.1 + 8
posY = canvas7.height * BIG_SQUARE / 2
writeText('a-b', posX, posY, ctx7)

// posX = canvas7.width * (BIG_SQUARE - SMALL_SQUARE) / 2 + 12
// posY = canvas7.height * (0.1 + BIG_SQUARE) + 24
// writeText('a-b', posX, posY, ctx7)

posX = canvas7.width * (BIG_SQUARE + 0.1) + canvas7.width * SMALL_SQUARE / 2 - 6
posY = canvas7.height * 0.7 - 5
writeText('b', posX, posY, ctx7)