var canvas_3_1 = document.querySelector('[data-canvas=example-3-1]')
var ctx_3_1 = document.querySelector('[data-canvas=example-3-1]').getContext("2d")

var scale = 135 //135px = 1u in graphic
var x0 = -1 * scale
var x1 = 2 * scale
// position of the axis counting from bottom left corner
var axisX = 20 
var axisY = 120

// function
ctx_3_1.strokeStyle = COLOR_RED
ctx_3_1.fillStyle = COLOR_BROWN_LIGHT
ctx_3_1.lineWidth = 2
drawFunctionBg(ctx_3_1, axisX, axisY, 0, x1, scale, example_3_1)

ctx_3_1.strokeStyle = COLOR_RED
ctx_3_1.fillStyle = COLOR_BROWN_LIGHT
drawFunction(ctx_3_1, axisX, axisY, x0, x1, scale, example_3_1, false)


// last line
ctx_3_1.beginPath()
ctx_3_1.moveTo(x1 + axisX, CANVAS_HEIGHT - axisY)
ctx_3_1.lineTo(x1 + axisX, CANVAS_HEIGHT - axisY - 200) //last point of the graphic
ctx_3_1.lineWidth = 2
ctx_3_1.strokeStyle = COLOR_BROWN_DARK
ctx_3_1.stroke()

// axis
ctx_3_1.strokeStyle = '#000000'
ctx_3_1.lineWidth = 2
drawAxis(ctx_3_1, axisX, axisY)


// Exapmple 3.1.1
var canvas_3_1_1 = document.querySelector('[data-canvas=example-3-1-1]')
var ctx_3_1_1 = document.querySelector('[data-canvas=example-3-1-1]').getContext("2d")

var scale = 120 //135px = 1u in graphic
var x0 = -2 * scale
var x1 = 2 * scale
// position of the axis counting from bottom left corner
var axisX = 50 
var axisY = 150

// function
ctx_3_1_1.strokeStyle = COLOR_RED
ctx_3_1_1.fillStyle = COLOR_BROWN_LIGHT
ctx_3_1_1.lineWidth = 2
drawFunction(ctx_3_1_1, axisX, axisY, x0, x1, scale, example_3_1_1, true)


// last line
ctx_3_1_1.beginPath()
ctx_3_1_1.moveTo(x1 + axisX, CANVAS_HEIGHT - axisY)
ctx_3_1_1.lineTo(x1 + axisX, CANVAS_HEIGHT - axisY - example_3_1_1(x1 / scale) * scale) //last point of the graphic
ctx_3_1_1.lineWidth = 2
ctx_3_1_1.strokeStyle = COLOR_BROWN_DARK
ctx_3_1_1.stroke()

// axis
ctx_3_1_1.strokeStyle = '#000000'
ctx_3_1_1.lineWidth = 2
drawAxis(ctx_3_1_1, axisX, axisY)



// // Example 3.1.1
// var canvas_3_1_2 = document.querySelector('[data-canvas=example-3-1-2]')
// var ctx_3_1_2 = document.querySelector('[data-canvas=example-3-1-2]').getContext("2d")

// var scale = 50 //135px = 1u in graphic
// var x0 = 1 * scale
// var x1 = 6 * scale
// // position of the axis counting from bottom left corner
// var axisX = 20 
// var axisY = 20

// // function
// ctx_3_1_2.strokeStyle = COLOR_RED
// ctx_3_1_2.fillStyle = COLOR_BROWN_LIGHT
// ctx_3_1_2.lineWidth = 2

// drawFunctionBg(ctx_3_1_2, axisX, axisY, x0, x1, scale, example_3_1_2)
// ctx_3_1_2.strokeStyle = COLOR_RED
// ctx_3_1_2.fillStyle = COLOR_BROWN_LIGHT
// drawFunction(ctx_3_1_2, axisX, axisY, 1, x1, scale, example_3_1_2, false)


// // line
// ctx_3_1_2.beginPath()
// ctx_3_1_2.moveTo(x0 + axisX, CANVAS_HEIGHT - axisY)
// ctx_3_1_2.lineTo(x0 + axisX, CANVAS_HEIGHT - axisY - example_3_1_2(x0/scale)*scale) 
// ctx_3_1_2.lineWidth = 2
// ctx_3_1_2.strokeStyle = COLOR_BROWN_DARK
// ctx_3_1_2.stroke()

// // axis
// ctx_3_1_2.strokeStyle = '#000000'
// ctx_3_1_2.lineWidth = 2
// drawAxis(ctx_3_1_2, axisX, axisY)