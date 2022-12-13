/**
 * First canvas 
 * */
var ctx_1_4_4_1 = document.querySelector('[data-canvas=chapter-1-4-4-1]').getContext("2d")
var scale = 250
var x0 = 0 * scale
var x1 = 1 * scale
var axisX = 20 
var axisY = 20

var initialPoints = [0, 1/4, 1/2, 3/4, 1]

function drawIdentityFunction(ctx, points) {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

    // Graphic function
    ctx.strokeStyle = COLOR_RED
    ctx.fillStyle = COLOR_BROWN_LIGHT
    ctx.lineWidth = 1
    drawFunction(ctx, axisX, axisY, x0, x1, scale, identityFunction, false)    

    // Rectangles
    ctx.translate(axisX, CANVAS_HEIGHT - axisY)
    ctx.strokeStyle = COLOR_BROWN_DARK
    points.forEach((point, index) => {
        let x = point * scale
        let y = -identityFunction(points[index + 1]) * scale
        let rectWidth = (points[index + 1] - point) * scale
        ctx.strokeRect(x, y, rectWidth, -y)
    })
    // Reset canvas position
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    // Axis
    ctx.strokeStyle = '#000000'
    ctx.lineWidth = 2
    drawAxis(ctx, axisX, axisY)
}

drawIdentityFunction(ctx_1_4_4_1, initialPoints)

var checkbox = document.querySelector('[data-checkbox=checkbox-chapter-1-4-4-1]')
checkbox.addEventListener('change', (e) => {
    if(e.target.checked) {
        initialPoints.push(7/8)
        initialPoints.sort()
        drawIdentityFunction(ctx_1_4_4_1, initialPoints)
    }
    else {
        let i = initialPoints.indexOf(7/8)
        initialPoints.splice(i, 1)
        drawIdentityFunction(ctx_1_4_4_1, initialPoints)
    }
})

/**
 * Second canvas
 */
var ctx_1_4_4_2 = document.querySelector('[data-canvas=chapter-1-4-4-2]').getContext("2d")
var formCtx = document.querySelector('[data-canvas-form=chapter-form-1-4-4-2]')
var inputCtx = document.querySelector('[data-canvas-input=canvas-input-1-4-4-2]')
// var btnCtx = document.querySelector('[data-canvas-btn=canvas-btn-1-4-4-2]')
var initialPoints2 = [0, 1/4, 1/2, 3/4, 1]
drawIdentityFunction(ctx_1_4_4_2, initialPoints2)

formCtx.addEventListener('submit', (e) => {
    e.preventDefault()
    const pointValue = inputCtx.value
    initialPoints2.push(+pointValue)
    initialPoints2.sort()
    let points = new Set(initialPoints2)
    initialPoints2 = [...points]
    drawIdentityFunction(ctx_1_4_4_2, initialPoints2)
})