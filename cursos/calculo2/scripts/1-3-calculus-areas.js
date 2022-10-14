var ctx_1_3_1 = document.querySelector('[data-canvas=chapter-1-3-1]').getContext("2d")

var scale = 60 //60px = 1u in graphic
var x0 = 0 * scale
var x1 = 2 * scale
// position of the axis counting from bottom left corner
var axisX = 20 
var axisY = 20

// function
ctx_1_3_1.strokeStyle = COLOR_RED
ctx_1_3_1.fillStyle = COLOR_BROWN_LIGHT
ctx_1_3_1.lineWidth = 2
drawFunction(ctx_1_3_1, axisX, axisY, x0, x1, scale, parabole, true)

// last line
ctx_1_3_1.beginPath()
ctx_1_3_1.moveTo(x1 + axisX, CANVAS_HEIGHT - axisY)
ctx_1_3_1.lineTo(x1 + axisX, CANVAS_HEIGHT - axisY - parabole(x1 / scale) * scale) //last point of the graphic
ctx_1_3_1.lineWidth = 2
ctx_1_3_1.strokeStyle = COLOR_BROWN_DARK
ctx_1_3_1.stroke()

// axis
ctx_1_3_1.strokeStyle = '#000000'
ctx_1_3_1.lineWidth = 2
drawAxis(ctx_1_3_1, axisX, axisY)

// axis divisions
ctx_1_3_1.beginPath()
ctx_1_3_1.moveTo(1 * scale + axisX, CANVAS_HEIGHT - axisY + 5)
ctx_1_3_1.lineTo(1 * scale + axisX, CANVAS_HEIGHT - axisY - 5)

ctx_1_3_1.strokeStyle = '#000000'
ctx_1_3_1.stroke()

ctx_1_3_1.beginPath()
ctx_1_3_1.moveTo(2 * scale + axisX, CANVAS_HEIGHT - axisY + 5)

ctx_1_3_1.lineTo(2 * scale + axisX, CANVAS_HEIGHT - axisY - 5)
ctx_1_3_1.stroke()

setFont(ctx_1_3_1, 'bold 16px Verdana', '#000')
writeText('1', 1 * scale + axisX - 5, CANVAS_HEIGHT - axisY + 20, ctx_1_3_1)
writeText('2', 2 * scale + axisX - 5, CANVAS_HEIGHT - axisY + 20, ctx_1_3_1)

setFont(ctx_1_3_1, 'italic 24px Sans', '#000')
writeText('R', 1.5 * scale + axisX - 5, CANVAS_HEIGHT - axisY - 50, ctx_1_3_1)

// canvas 2
var ctx_1_3_2 = document.querySelector('[data-canvas=chapter-1-3-2]').getContext("2d")

var rect_checkbox = document.querySelector('[data-checkbox=checkbox-chapter-1-3-2]')

function drawParabole(ctx, showPolygon, numbersOfPolygons, mode) {
    ctx.clearRect(0, 0, 300, 300)
    
    // function
    ctx.strokeStyle = COLOR_RED
    ctx.fillStyle = COLOR_BROWN_LIGHT
    ctx.lineWidth = 2
    drawFunction(ctx, axisX, axisY, x0, x1, scale, parabole, false)

    // rect
    ctx.lineWidth = 2
    ctx.fillStyle = COLOR_BROWN_DARK
    ctx.strokeStyle = COLOR_BROWN_DARK
    if(showPolygon) {
        ctx.strokeStyle = '#000'
    }
    drawFunctionRect(ctx, axisX, axisY, x0, x1, scale, numbersOfPolygons, parabole, mode, true, true)
    // ctx.globalAlpha = 1
    
    // last line
    ctx.beginPath()
    ctx.moveTo(x1 + axisX, CANVAS_HEIGHT - axisY)
    ctx.lineTo(x1 + axisX, CANVAS_HEIGHT - axisY - parabole(x1 / scale) * scale) //last point of the graphic
    ctx.lineWidth = 2
    ctx.strokeStyle = COLOR_BROWN_DARK
    ctx.stroke()
    
    // axis
    ctx.strokeStyle = '#000000'
    ctx.lineWidth = 2
    drawAxis(ctx, axisX, axisY)
}

rect_checkbox.addEventListener('change', (e) => {
    drawParabole(ctx_1_3_2, rect_checkbox.checked, 9, 'ins')
})

drawParabole(ctx_1_3_2, rect_checkbox.checked, 9, 'ins')

// canvas 3
var ctx_1_3_3 = document.querySelector('[data-canvas=chapter-1-3-3]').getContext("2d")
var subintervals_picker = document.querySelector('[data-picker=chapter-1-3-3]')

var areaParabole = paraboleSimple(+subintervals_picker.value)
drawParabole(ctx_1_3_3, true, 2)
// var area_parabole = document.querySelector('[data-calculation=chapter-1-3-3]')

/**
 * Mathjax example code (dynamic content)
 */
let promise = Promise.resolve();  // Used to hold chain of typesetting calls

function typeset(code) {
  promise = promise.then(() => MathJax.typesetPromise(code()))
                   .catch((err) => console.log('Typeset failed: ' + err.message));
  return promise;
}

/**
 * End of Mathjax example code
 */

subintervals_picker.addEventListener('change', e => {
    areaParabole = paraboleSimple(+subintervals_picker.value)
    drawParabole(ctx_1_3_3, true, +subintervals_picker.value)

    /**
     * Mathjax example code
     */
    typeset(() => {
        const math = document.querySelector('[data-calculation=chapter-1-3-3]');
        math.innerHTML = `$A(R_{${subintervals_picker.value}}) = ${areaParabole.toFixed(6)}$`;
        return [math];
    });
    /**
     * End of Mathjax example code
     */
})

// canvas 4
var canvas_1_3_4 = document.querySelector('[data-canvas=chapter-1-3-4]')
var ctx_1_3_4 = document.querySelector('[data-canvas=chapter-1-3-4]').getContext("2d")

// var rect_checkbox_1_3_4 = document.querySelector('[data-checkbox=checkbox-chapter-1-3-4]')

// rect_checkbox_1_3_4.addEventListener('change', (e) => {
//     drawParabole(ctx_1_3_4, rect_checkbox_1_3_4.checked, 9, 'cir')
// })

drawParabole(ctx_1_3_4, false, 9, 'cir')

// canvas 5
var ctx_1_3_5 = document.querySelector('[data-canvas=chapter-1-3-5]').getContext("2d")
var subintervals_picker_1_3_5 = document.querySelector('[data-picker=chapter-1-3-5]')

drawParabole(ctx_1_3_5, true, 2, 'cir')

subintervals_picker_1_3_5.addEventListener('change', e => {
    drawParabole(ctx_1_3_5, true, +subintervals_picker_1_3_5.value, 'cir')
    /**
     * Mathjax example code
     */
    typeset(() => {
        const math = document.querySelector('[data-calculation=chapter-1-3-5]');
        math.innerHTML = `$A(S_{${subintervals_picker_1_3_5.value}}) = ${paraboleSimple2(+subintervals_picker_1_3_5.value).toFixed(6)}$`;
        return [math];
    });
    /**
     * End of Mathjax example code
     */
})


// canvas 6
var ctx_1_3_6 = document.querySelector('[data-canvas=chapter-1-3-6]').getContext("2d")

var subintervals = 6
var scale2 = 70 / Math.PI

ctx_1_3_6.beginPath()
ctx_1_3_6.lineWidth = 2
ctx_1_3_6.fillStyle = COLOR_BROWN_DARK
ctx_1_3_6.strokeStyle = '#000'
drawFunctionRect(ctx_1_3_6, axisX, axisY, 0, 280, scale2, subintervals, example_1_3_5, 'right', true, true)

ctx_1_3_6.beginPath()
ctx_1_3_6.strokeStyle = COLOR_RED
ctx_1_3_6.fillStyle = COLOR_BROWN_LIGHT
ctx_1_3_6.lineWidth = 1
drawFunction(ctx_1_3_6, axisX, axisY, 0, 280, scale2, example_1_3_5, false)

ctx_1_3_6.beginPath()
ctx_1_3_6.strokeStyle = '#000'
ctx_1_3_6.lineWidth = 2
drawAxis(ctx_1_3_6, axisX, axisY)


