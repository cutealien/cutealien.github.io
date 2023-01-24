function firstGraphic(x) {
    return (x - 2)*(x-2)*(x-4) + 4.5
}

var scale = 60 //60px = 1u in graphic
var x0 = 1 * scale
var x1 = 4 * scale
// position of the axis counting from bottom left corner
var axisX = 20 
var axisY = 20

function drawFunctionF(ctx) {
    // function
    ctx.strokeStyle = COLOR_RED
    ctx.fillStyle = COLOR_BROWN_LIGHT
    ctx.lineWidth = 2
    
    drawFunction(ctx, axisX, axisY, x0, x1, scale, firstGraphic, true)
    
    
    // vertical line
    ctx.beginPath()
    ctx.moveTo(x0 + axisX, CANVAS_HEIGHT - axisY)
    ctx.lineTo(x0 + axisX, CANVAS_HEIGHT - axisY - 300) //first point of the graphic
    ctx.lineWidth = 2
    ctx.strokeStyle = COLOR_BROWN_DARK
    ctx.moveTo(x1 + axisX, CANVAS_HEIGHT - axisY)
    ctx.lineTo(x1 + axisX, CANVAS_HEIGHT - axisY - 300) //last point of the graphic
    ctx.stroke()
    
    // axis
    ctx.strokeStyle = '#000000'
    ctx.lineWidth = 2
    drawAxis(ctx, axisX, axisY)
}


// Second graphic
function secondGraphic(x) {
    return (x - 2)*(x-2) + 0.2
}

function drawFunctionG(ctx) {
    // function
    ctx.strokeStyle = COLOR_STROKE_BLUE
    ctx.fillStyle = COLOR_BROWN_LIGHT
    ctx.lineWidth = 2
    // drawFunctionBg(ctx, axisX, axisY, 0, x1, scale, example_3_1)
    
    // ctx.strokeStyle = COLOR_RED
    // ctx.fillStyle = COLOR_BROWN_LIGHT
    drawFunction(ctx, axisX, axisY, x0, x1, scale, secondGraphic, true)
    
    
    // vertical line
    ctx.beginPath()
    ctx.moveTo(x0 + axisX, CANVAS_HEIGHT - axisY)
    ctx.lineTo(x0 + axisX, CANVAS_HEIGHT - axisY - 300) //last point of the graphic
    ctx.lineWidth = 2
    ctx.strokeStyle = COLOR_BROWN_DARK
    ctx.moveTo(x1 + axisX, CANVAS_HEIGHT - axisY)
    ctx.lineTo(x1 + axisX, CANVAS_HEIGHT - axisY - 300) //last point of the graphic
    ctx.stroke()
    
    // axis
    ctx.strokeStyle = '#000000'
    ctx.lineWidth = 2
    drawAxis(ctx, axisX, axisY)
}

function drawFminusG(ctx) {
    // function
    ctx.strokeStyle = COLOR_RED
    ctx.fillStyle = COLOR_BROWN_LIGHT
    ctx.lineWidth = 2
    drawFunction(ctx, axisX, axisY, x0, x1, scale, firstGraphic, true)
    ctx.strokeStyle = COLOR_STROKE_BLUE
    ctx.fillStyle = '#fff'
    ctx.lineWidth = 2
    drawFunction(ctx, axisX, axisY, x0, x1, scale, secondGraphic, true)
    
    
    // vertical line
    ctx.beginPath()
    ctx.moveTo(x0 + axisX, CANVAS_HEIGHT - axisY)
    ctx.lineTo(x0 + axisX, CANVAS_HEIGHT - axisY - 300) //last point of the graphic
    ctx.lineWidth = 2
    ctx.strokeStyle = COLOR_BROWN_DARK
    ctx.moveTo(x1 + axisX, CANVAS_HEIGHT - axisY)
    ctx.lineTo(x1 + axisX, CANVAS_HEIGHT - axisY - 300) //last point of the graphic
    ctx.stroke()
    
    // axis
    ctx.strokeStyle = '#000000'
    ctx.lineWidth = 2
    drawAxis(ctx, axisX, axisY)
}


// graphic
var canvas_3_1_4 = document.querySelector('[data-canvas=chapter-3-3-4]')
var ctx_3_3_4 = document.querySelector('[data-canvas=chapter-3-3-4]').getContext("2d")

var areasGraphic = document.querySelector('[data-options=graphics-3-3-4]')

var graphicOptions = areasGraphic.querySelectorAll('[data-option]')
drawFunctionF(ctx_3_3_4)

graphicOptions.forEach(option => {
    option.addEventListener('change', (e) => {
        e.preventDefault()
        ctx_3_3_4.clearRect(0,0, canvas_3_1_4.width, canvas_3_1_4.height)
        if(e.target.value === 'a') {
            drawFunctionF(ctx_3_3_4)
        }
        if(e.target.value === 'b') {
            drawFunctionG(ctx_3_3_4)
        }
        if(e.target.value === 'c') {
            drawFminusG(ctx_3_3_4)
        }
    })
})

// graphic K value
var canvas_3_3_5 = document.querySelector('[data-canvas=chapter-3-3-5]')
var ctx_3_3_5 = document.querySelector('[data-canvas=chapter-3-3-5]').getContext("2d")
drawFminusGTranslated(ctx_3_3_5)

var kvaluePicker = document.querySelector('[data-picker=chapter-3-3-5]')

kvaluePicker.addEventListener('change', (e) => {
    e.preventDefault()
    var k = +e.target.value - 2
    drawFminusGTranslated(ctx_3_3_5, k)
})

function drawFminusGTranslated(ctx, k = -2) {

    ctx.clearRect(0, 0, canvas_3_3_5.width, canvas_3_3_5.height)
    ctx.strokeStyle = COLOR_RED
    ctx.fillStyle = COLOR_BROWN_LIGHT
    ctx.lineWidth = 2
    drawFunction(ctx, axisX, axisY + k*scale, x0, x1, scale, firstGraphic, true)
    ctx.strokeStyle = COLOR_STROKE_BLUE
    ctx.fillStyle = '#fff'
    ctx.lineWidth = 2
    drawFunction(ctx, axisX, axisY + k*scale, x0, x1, scale, secondGraphic, true)

    // vertical line
    ctx.beginPath()
    ctx.moveTo(x0 + axisX, 0)
    ctx.lineTo(x0 + axisX, 0 + canvas_3_3_5.height) //last point of the graphic
    ctx.lineWidth = 2
    ctx.strokeStyle = COLOR_BROWN_DARK
    ctx.moveTo(x1 + axisX, 0)
    ctx.lineTo(x1 + axisX, 0 + canvas_3_3_5.height) //last point of the graphic
    ctx.stroke()
    
    // axis
    ctx.strokeStyle = '#000000'
    ctx.lineWidth = 2
    drawAxis(ctx, axisX, axisY + 40)
}

// Example 3.3.1
function example_3_3_1_f(x) {
    return Math.pow(x, 2) + 2
}
function example_3_3_1_g(x) {
    return -x
}

var canvas_3_3_6 = document.querySelector('[data-canvas=chapter-3-3-6]')
var ctx_3_3_6 = document.querySelector('[data-canvas=chapter-3-3-6]').getContext("2d")

var c_6_scale = 60 //50px = 1u in graphic
var c_6_x0 = -1 * c_6_scale
var c_6_x1 = 1 * c_6_scale
// position of the axis counting from bottom left corner
var c_6_axisX = 100 
var c_6_axisY = 100

ctx_3_3_6.globalAlpha = 0.8
ctx_3_3_6.strokeStyle = COLOR_RED
ctx_3_3_6.fillStyle = COLOR_BROWN_LIGHT
ctx_3_3_6.lineWidth = 2
drawFunction(ctx_3_3_6, c_6_axisX, c_6_axisY, c_6_x0, c_6_x1, c_6_scale, example_3_3_1_f, false)
ctx_3_3_6.strokeStyle = COLOR_STROKE_BLUE
ctx_3_3_6.fillStyle = '#fff'
ctx_3_3_6.lineWidth = 2
drawFunction(ctx_3_3_6, c_6_axisX, c_6_axisY, c_6_x0, c_6_x1, c_6_scale, example_3_3_1_g, false)

// vertical line
ctx_3_3_6.beginPath()
ctx_3_3_6.lineWidth = 2
ctx_3_3_6.strokeStyle = COLOR_BROWN_DARK
ctx_3_3_6.moveTo(c_6_x1 + c_6_axisX, 0)
ctx_3_3_6.lineTo(c_6_x1 + c_6_axisX, 0 + canvas_3_3_6.height) //last point of the graphic
ctx_3_3_6.stroke()

ctx_3_3_6.globalAlpha = 1
// axis
ctx_3_3_6.strokeStyle = '#000000'
ctx_3_3_6.lineWidth = 2
drawAxis(ctx_3_3_6, c_6_axisX, c_6_axisY)


var canvas_3_3_7 = document.querySelector('[data-canvas=chapter-3-3-7]')
var ctx_3_3_7 = document.querySelector('[data-canvas=chapter-3-3-7]').getContext("2d")

var c_7_scale = 60 //60px = 1u in graphic
var c_7_x0 = 0 * c_7_scale
var c_7_x1 = 1 * c_7_scale
// position of the axis counting from bottom left corner
var c_7_axisX = 100 
var c_7_axisY = 100

ctx_3_3_7.strokeStyle = COLOR_RED
ctx_3_3_7.fillStyle = COLOR_BROWN_LIGHT
ctx_3_3_7.lineWidth = 2
drawFunction(ctx_3_3_7, c_7_axisX, c_7_axisY, c_7_x0, c_7_x1, c_7_scale, example_3_3_1_f, true)
ctx_3_3_7.strokeStyle = COLOR_STROKE_BLUE
ctx_3_3_7.fillStyle = COLOR_BROWN_LIGHT
ctx_3_3_7.lineWidth = 2
drawFunction(ctx_3_3_7, c_7_axisX, c_7_axisY, c_7_x0, c_7_x1, c_7_scale, example_3_3_1_g, true)

// vertical line
ctx_3_3_7.beginPath()
ctx_3_3_7.lineWidth = 2
ctx_3_3_7.strokeStyle = COLOR_BROWN_DARK
ctx_3_3_7.moveTo(c_7_x1 + c_7_axisX, 0)
ctx_3_3_7.lineTo(c_7_x1 + c_7_axisX, 0 + canvas_3_3_7.height) //last point of the graphic
ctx_3_3_7.stroke()
// axis
ctx_3_3_7.strokeStyle = '#000000'
ctx_3_3_7.lineWidth = 2
drawAxis(ctx_3_3_7, c_7_axisX, c_7_axisY)


// Example 3.3.3
function example_3_3_3_f(x) {
    return 3*Math.pow(x, 3) - Math.pow(x, 2) - 10 * x
}
function example_3_3_3_g(x) {
    return (-1)*Math.pow(x, 2) + 2*x
}

var canvas_3_3_8 = document.querySelector('[data-canvas=chapter-3-3-8]')
var ctx_3_3_8 = document.querySelector('[data-canvas=chapter-3-3-8]').getContext("2d")

var c_8_scale = 20 //20px = 1u in graphic
var c_8_x0 = -3 * c_8_scale
var c_8_x1 = 3 * c_8_scale
// position of the axis counting from bottom left corner
var c_8_axisX = 150 
var c_8_axisY = 170

ctx_3_3_8.globalAlpha = 0.8
ctx_3_3_8.strokeStyle = COLOR_RED
ctx_3_3_8.fillStyle = COLOR_BROWN_LIGHT
ctx_3_3_8.lineWidth = 1
drawFunction(ctx_3_3_8, c_8_axisX, c_8_axisY, c_8_x0, c_8_x1, c_8_scale, example_3_3_3_f, false)
ctx_3_3_8.strokeStyle = COLOR_STROKE_BLUE
ctx_3_3_8.fillStyle = '#fff'
ctx_3_3_8.lineWidth = 1
drawFunction(ctx_3_3_8, c_8_axisX, c_8_axisY, c_8_x0, c_8_x1, c_8_scale, example_3_3_3_g, false)

ctx_3_3_8.globalAlpha = 1
// axis
ctx_3_3_8.strokeStyle = '#000000'
ctx_3_3_8.lineWidth = 2
drawAxis(ctx_3_3_8, c_8_axisX, c_8_axisY)



var canvas_3_3_9 = document.querySelector('[data-canvas=chapter-3-3-9]')
var ctx_3_3_9 = document.querySelector('[data-canvas=chapter-3-3-9]').getContext("2d")
var c_9_x0 = -2 * c_8_scale
var c_9_x1 = 2 * c_8_scale

// area f
ctx_3_3_9.globalAlpha = 0.8
ctx_3_3_9.strokeStyle = COLOR_RED
ctx_3_3_9.fillStyle = COLOR_BROWN_LIGHT
ctx_3_3_9.lineWidth = 2
drawFunction(ctx_3_3_9, c_8_axisX, c_8_axisY, c_9_x0, c_9_x1, c_8_scale, example_3_3_3_f, true)

// area g
ctx_3_3_9.globalAlpha = 0.8
ctx_3_3_9.strokeStyle = COLOR_STROKE_BLUE
ctx_3_3_9.fillStyle = COLOR_BROWN_LIGHT
ctx_3_3_9.lineWidth = 1
drawFunction(ctx_3_3_9, c_8_axisX, c_8_axisY, c_9_x0, c_9_x1, c_8_scale, example_3_3_3_g, true)

// delete incorrect areas
ctx_3_3_9.globalAlpha = 0.8
ctx_3_3_9.fillStyle = '#fff'
drawFunctionBg(ctx_3_3_9, c_8_axisX, c_8_axisY, c_9_x0, -5/3*c_8_scale, c_8_scale, example_3_3_3_f)

ctx_3_3_9.globalAlpha = 0.8
ctx_3_3_9.strokeStyle = COLOR_RED
ctx_3_3_9.fillStyle = COLOR_BROWN_LIGHT
ctx_3_3_9.lineWidth = 1
drawFunction(ctx_3_3_9, c_8_axisX, c_8_axisY, c_9_x0, (-5/3 + 0.1)*c_8_scale, c_8_scale, example_3_3_3_f, false)


ctx_3_3_9.globalAlpha = 1
// axis
ctx_3_3_9.strokeStyle = '#000000'
ctx_3_3_9.lineWidth = 2
drawAxis(ctx_3_3_9, c_8_axisX, c_8_axisY)



function example_3_3_4_f(x) {
    return x - 1
}
function example_3_3_4_g(x) {
    return -Math.sqrt(3-x)
}
function example_3_3_4_h(x) {
    return Math.sqrt(3-x)
}

var canvas_3_3_10 = document.querySelector('[data-canvas=chapter-3-3-10]')
var ctx_3_3_10 = document.querySelector('[data-canvas=chapter-3-3-10]').getContext("2d")

var c_10_scale = 60 //20px = 1u in graphic
var c_10_x0 = -1 * c_10_scale
var c_10_x1 = 3 * c_10_scale
// position of the axis counting from bottom left corner
var c_10_axisX = 100 
var c_10_axisY = 170

ctx_3_3_10.globalAlpha = 0.8
ctx_3_3_10.strokeStyle = COLOR_RED
ctx_3_3_10.fillStyle = COLOR_BROWN_LIGHT
ctx_3_3_10.lineWidth = 1
drawFunction(ctx_3_3_10, c_10_axisX, c_10_axisY, 1*c_10_scale, 2*c_10_scale, c_10_scale, example_3_3_4_f, true)

ctx_3_3_10.strokeStyle = COLOR_STROKE_BLUE
ctx_3_3_10.fillStyle = COLOR_BROWN_LIGHT
ctx_3_3_10.lineWidth = 1
drawFunction(ctx_3_3_10, c_10_axisX, c_10_axisY, c_10_x0, c_10_x1, c_10_scale, example_3_3_4_g, true)

ctx_3_3_10.strokeStyle = COLOR_STROKE_GREEN
ctx_3_3_10.fillStyle = COLOR_BROWN_LIGHT
ctx_3_3_10.lineWidth = 1
drawFunction(ctx_3_3_10, c_10_axisX, c_10_axisY, 2*c_10_scale, c_10_x1, c_10_scale, example_3_3_4_h, true)

ctx_3_3_10.strokeStyle = COLOR_RED
ctx_3_3_10.fillStyle = '#fff'
ctx_3_3_10.lineWidth = 1
drawFunction(ctx_3_3_10, c_10_axisX, c_10_axisY, -1*c_10_scale, 1*c_10_scale, c_10_scale, example_3_3_4_f, true)

// ctx_3_3_10.fillStyle = 'red'
// drawFunctionBg(ctx_3_3_10, c_10_axisX, -1*c_10_scale, 2*c_10_scale, c_10_x1, c_10_scale, example_3_3_4_f)



ctx_3_3_10.globalAlpha = 1
// axis
ctx_3_3_10.strokeStyle = '#000000'
ctx_3_3_10.lineWidth = 2
drawAxis(ctx_3_3_10, c_10_axisX, c_10_axisY)