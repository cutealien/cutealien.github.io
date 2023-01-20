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

const COLOR_BROWN_DARK = '#b66c46'
const COLOR_BROWN_LIGHT = '#f5ebe6'
const COLOR_BROWN = '#ecd9cf'


const COLOR_RED = '#b31919'
let f = new FontFace('Fugaz One', 'url(../css/fonts/Fugaz_one/FugazOne-regular.ttf)');

// f.load().then(function(a) {
// console.log('font', a);
// });


/**
 * Functions
 */
function setFont(ctx, fontStyle = '24px Fugaz One', color = '#000') {
    ctx.font = fontStyle
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

function polygonArea(sides = 3, radio = 1) {
    return (sides / 2) * Math.pow(radio, 2) * Math.sin((2 * Math.PI) / sides)
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
            ctx.fillStyle = COLOR_BROWN_LIGHT
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
            ctx.strokeStyle = COLOR_BROWN_DARK
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


function parabole(x) {
    // return {x, y: Math.pow(x, 2)}
    return Math.pow(x, 2)
}
function example_1_3_5(x) {  
    return Math.sin(x) + 6
}
// function polynomial1(x) {
//     return 2*Math.pow(x,2) + 6 * x - 5
// }
function identityFunction(x) {
    return x;
}

function example_3_1(x) {
    return Math.exp(-x)
}
function example_3_1_1(x) {
    return 1/Math.pow((4-x), 2)
}
function example_3_1_2(x) {
    return 1/x
}

// function drawAxis(canvas, ctx, centerX, centerY) {
function drawAxis(ctx, centerX, centerY) {
    ctx.translate(centerX, CANVAS_HEIGHT - centerY)
    ctx.beginPath()
    ctx.moveTo(0, centerY)
    ctx.lineTo(0, -CANVAS_HEIGHT)
    ctx.stroke()
    ctx.moveTo(-centerX, 0)
    ctx.lineTo(CANVAS_WIDTH, 0)
    ctx.stroke()
    ctx.setTransform(1, 0, 0, 1, 0, 0);
}

function drawFunction(ctx, axisX, axisY, x0, x1, scale, functionToDraw, background = false) {
    var y
    var x

    // ctx.lineWidth = 3
    // ctx.globalAlpha = 0.5
    
    ctx.translate(axisX, CANVAS_HEIGHT - axisY)
    ctx.beginPath()
    ctx.moveTo(x0 , -functionToDraw(x0 / scale) * scale)
    // ctx.moveTo(100, -100)
    
    for(var i = x0; i <= x1; ++i) {
        y = -functionToDraw(i / scale) * scale
        x = i
        ctx.lineTo(x, y)
        ctx.stroke()
    }
    if(background) {
        ctx.lineTo(x1, 0)
        ctx.lineTo(x0, 0)
        // ctx.closePath()
        ctx.fill()
    }
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    resetoColor(ctx)
}

function drawFunctionBg(ctx, axisX, axisY, x0, x1, scale, functionToDraw) {
    
    var y
    var x
    
    ctx.translate(axisX, CANVAS_HEIGHT - axisY)
    ctx.beginPath()
    ctx.moveTo(x0 , -functionToDraw(x0 / scale) * scale)
    // ctx.moveTo(100, -100)
    
    for(var i = x0; i <= x1; ++i) {
        y = -functionToDraw(i / scale) * scale
        x = i
        ctx.lineTo(x, y)
    }
    ctx.lineTo(x1, 0)
    ctx.lineTo(x0, 0)
    // ctx.closePath()
    ctx.fill()
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    resetoColor(ctx)
}

function drawFunctionRect(ctx, axisX, axisY, x0, x1, scale, subintervals, functionToDraw, mode = 'ins', stroke = false) {
    var y
    var x
    var y0
    var yValues = []
    var xValues = []
    const increment = (x1 - x0) / subintervals

    // ctx.globalAlpha = 0.5

    ctx.translate(axisX, CANVAS_HEIGHT - axisY)
    ctx.beginPath()
    ctx.moveTo(x0, - functionToDraw(x0 / scale) * scale)

    for(var i = 0; i < subintervals; i++) {
        if(mode === 'ins' || mode === 'cir') {
            yValues = []
            xValues = []

            for(var j = x0 + i * increment; j <= x0 + ((i +1) * increment); ++j) {
                yValues.push(functionToDraw(j / scale) * scale)
                xValues.push(j)
            }
    
            y0 = mode === 'ins' ? Math.min(...yValues) : Math.max(...yValues)
            y = - y0
            x = x0 + i * increment
        }
        if(mode === 'right') {
            x = x0 + i * increment
            y = -functionToDraw((x + increment) / scale) * scale
        }
        if(stroke) {
            if(mode === 'cir' || mode === 'right') {
                ctx.globalAlpha = 0.5
            }
            ctx.strokeRect(x, y, increment, -y)
        }
        ctx.fillRect(x, y, increment, -y)
    }
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalAlpha = 1
}

function calculateFunctionArea(areaToCalculate, x0, x1, subintervals, mode, precision = 100000) {
    const increment = Math.floor(((x1 - x0) / subintervals) * precision) / precision
    var area = 0

    for(var i = 0; i <= subintervals - 1; ++i) {
        var yValues = []
        for(var j = x0 + i * increment; j <= x0 + ((1 + i) * increment); j += 0.1) {
            yValues.push(areaToCalculate(j))
        }

        // var y0 = mode === 'ins' ? Math.min(...yValues) : Math.max(...yValues)
        var y0 = mode === 'ins' ? Math.min(...yValues) : Math.max(...yValues)
        area += (y0 * increment)
        // console.log(mode , x0 + i * increment, x0 + ((1 + i) * increment), y0 * increment)
    }
    return area
}

function paraboleSimple(n) {
    return (4/3) * (1 - 1/n) * (2 - 1/n)
}
function paraboleSimple2(n) {
    return (4/3) * (1 + 1/n) * (2 + 1/n)
}