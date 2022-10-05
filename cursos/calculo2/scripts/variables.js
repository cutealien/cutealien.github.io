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

const COLOR_ORANGE_DARK = '#b66c46'
const COLOR_ORANGE_LIGHT = '#f5ebe6'

let f = new FontFace('Fugaz One', 'url(../css/fonts/Fugaz_one/FugazOne-regular.ttf)');

// f.load().then(function(a) {
// console.log('font', a);
// });


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


function drawPolygon (ctx, numberOfSides, size = 100, xCenter = 150, yCenter = 150) {

    ctx.beginPath();
    ctx.moveTo(xCenter +  size * Math.cos(0), yCenter +  size *  Math.sin(0));          
    
    for (var i = 1; i <= numberOfSides; i += 1) {
        ctx.lineTo (xCenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), yCenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
    }
    ctx.stroke();
}

function drawCircle(ctx, radius = 100, xCenter = 150, yCenter = 150) {
    ctx.beginPath();
    ctx.arc(xCenter, yCenter, radius, 0, 2 * Math.PI);
    ctx.stroke();
}

function drawCurve(ctx, mode = 'ins') {
    ctx.clearRect(0, 0, 300, 300)
    var xCoord = 1
    var yValues = []
    var xValues = []
    // (240 / 3)
    // 30 = 0
    // 110 = 2 * Math.PI

    // ctx.moveTo(30, 30 * Math.sin(30 * 2 * Math.PI / 100) + 100)
    ctx.moveTo(0, 30 * Math.sin(0 * 2 * Math.PI / 100) + 100)
    for(var i = 0; i <= 270; i += xCoord) {
        var yCoord = 30 * Math.sin(i * 2 * Math.PI / 100) + 100
        if(i % 48 === 0 && i !== 0) {
            yValues = []
            xValues = []
            ctx.fillStyle = COLOR_ORANGE_LIGHT
            for(var j = i - 48; j < i ; ++j) {
                xValues.push(j)
                yValues.push(30 * Math.sin(j * 2 * Math.PI / 100) + 100)
            }

            // if(mode = 'ins') {
            //     var min = Math.max(...yValues)
            // }
            var point = mode === 'ins' ? Math.max(...yValues) : Math.min(...yValues)

            var index = yValues.indexOf(point)
            ctx.fillRect(i - 48, point, 48, 250 - yCoord)
            ctx.strokeStyle = COLOR_ORANGE_DARK
            ctx.strokeRect(i - 48, point, 48, 250 - yCoord)
        }
    }
    for(var i = 0; i <= 270; i += xCoord) {
        // ctx.moveTo(0, 30 * Math.sin(i * 2 * Math.PI / 100) + 100)
        var yCoord = 30 * Math.sin(i * 2 * Math.PI / 100) + 100
        ctx.strokeStyle = '#000'
        ctx.lineTo(i, yCoord)
        ctx.stroke()
        if(i % 48 === 0 && i !== 0 && i % 5 === 0) {
            break
        }
    }
    ctx.clearRect(0, 200, 300, 100)            
}

function polygonArea(sides = 3, radio = 1) {
    return (sides / 2) * Math.pow(radio, 2) * Math.sin((2 * Math.PI) / sides)
}