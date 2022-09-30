var canvas_chapter_1_1 = document.querySelectorAll('[data-canvas=chapter-1-1]')
var pickers = document.querySelectorAll('[data-picker=chapter-1-1]')

//canvas 1
var ctx_1_1 = canvas_chapter_1_1[0].getContext("2d")

setFont('24px', 'Fugaz One', '#000', ctx_1_1)

drawSquare(
    CANVAS_PADDING, 
    CANVAS_HEIGHT * 0.25, 
    CANVAS_WIDTH * 0.8, 
    CANVAS_HEIGHT * 0.5,
    '#000',
    '#fff',
    ctx_1_1
)

var posX = CANVAS_WIDTH / 2 - 20
var posY = CANVAS_HEIGHT * 0.25 - 5
writeText('A = ab', posX, posY, ctx_1_1)

posX = CANVAS_WIDTH - CANVAS_PADDING + 5
posY = CANVAS_HEIGHT * 0.5
writeText('a', posX, posY, ctx_1_1)

posX = CANVAS_WIDTH * .5
posY = CANVAS_HEIGHT *( 0.25 + 0.5) + 25
writeText('b', posX, posY, ctx_1_1)

// canvas 2
var paralelogram = {
    x1: 100, y1: 75,
    x2: 270, y2: 75,
    x3: 200, y3: 200,
    x4: 30, y4: 200
}

var ctx_1_2 = canvas_chapter_1_1[1].getContext("2d")

ctx_1_2.lineWidth = 5
ctx_1_2.beginPath()
ctx_1_2.moveTo(paralelogram.x1, paralelogram.y1)
ctx_1_2.lineTo(paralelogram.x2, paralelogram.y2)
ctx_1_2.lineTo(paralelogram.x3, paralelogram.y3)
ctx_1_2.lineTo(paralelogram.x4, paralelogram.y4)
ctx_1_2.closePath()
ctx_1_2.strokeStyle = COLOR_ORANGE_DARK
ctx_1_2.stroke()
ctx_1_2.fillStyle = COLOR_ORANGE_LIGHT
ctx_1_2.fill()

ctx_1_2.beginPath()
ctx_1_2.strokeStyle = '#000'
ctx_1_2.lineWidth = 3
ctx_1_2.moveTo(paralelogram.x1, paralelogram.y1)
ctx_1_2.lineTo(paralelogram.x1, paralelogram.y3)
ctx_1_2.setLineDash([15, 15])
ctx_1_2.stroke()

ctx_1_2.beginPath()
ctx_1_2.lineWidth = 3
ctx_1_2.moveTo(paralelogram.x2, paralelogram.y2)
ctx_1_2.lineTo(paralelogram.x2, paralelogram.y3)
ctx_1_2.lineTo(paralelogram.x3, paralelogram.y3)
ctx_1_2.stroke()

// writeText('A = ab', (paralelogram.x1 + paralelogram.x2) / 2 - 30, paralelogram.y1 - 5, ctx_1_2)
// writeText('a', paralelogram.x1 + 5, (paralelogram.y1 + paralelogram.y4) / 2, ctx_1_2)
// writeText('b', paralelogram.x1 + 25, paralelogram.y4 + 24, ctx_1_2)


//canvas 3
var ctx_1_3 = canvas_chapter_1_1[2].getContext("2d")

ctx_1_3.lineWidth = 5
ctx_1_3.setLineDash([])
ctx_1_3.beginPath()
ctx_1_3.moveTo(paralelogram.x1, paralelogram.y1)
ctx_1_3.lineTo(paralelogram.x3, paralelogram.y3)
ctx_1_3.lineTo(paralelogram.x4, paralelogram.y4)
ctx_1_3.closePath()
ctx_1_3.strokeStyle = COLOR_ORANGE_DARK
ctx_1_3.stroke()
ctx_1_3.fillStyle = COLOR_ORANGE_LIGHT
ctx_1_3.fill()

ctx_1_3.lineWidth = 5
ctx_1_3.setLineDash([15, 15])
ctx_1_3.beginPath()
ctx_1_3.moveTo(paralelogram.x1, paralelogram.y1)
ctx_1_3.lineTo(paralelogram.x2, paralelogram.y2)
ctx_1_3.lineTo(paralelogram.x3, paralelogram.y3)
ctx_1_3.closePath()
ctx_1_3.strokeStyle = '#000'
ctx_1_3.stroke()
ctx_1_3.fillStyle = '#d0d0d0'
ctx_1_3.fill()

ctx_1_3.lineWidth = 3
ctx_1_3.beginPath()
ctx_1_3.moveTo(paralelogram.x1, paralelogram.y1)
ctx_1_3.lineTo(paralelogram.x1, paralelogram.y3)
// ctx_1_3.closePath()
ctx_1_3.strokeStyle = '#000'
ctx_1_3.stroke()


// canvas 4 polygon
var ctx_1_4 = canvas_chapter_1_1[3].getContext('2d')
var numberPicker = pickers[0]
var polygon = document.querySelector('[data-calculation=polygon]')

polygon.innerHTML = `Área del polígono = ${polygonArea().toFixed(6)}`
ctx_1_4.strokeStyle = '#000'

drawCircle(ctx_1_4)

ctx_1_4.strokeStyle = COLOR_ORANGE_DARK

drawPolygon(ctx_1_4, 3)

numberPicker.addEventListener('change', (e) => {
    const numberOfSides = +e.target.value
    ctx_1_4.clearRect(0, 0, 300, 300)
    ctx_1_4.strokeStyle = '#000'
    drawCircle(ctx_1_4)
    ctx_1_4.strokeStyle = COLOR_ORANGE_DARK
    drawPolygon(ctx_1_4, numberOfSides)
    polygon.innerHTML = `Área del polígono = ${polygonArea(+e.target.value).toFixed(6)}`
})

// canvas 5 graphs
var ctx_1_5 = canvas_chapter_1_1[4].getContext('2d')
var insCirPicker = pickers[1]
drawCurve(ctx_1_5, 'ins')

insCirPicker.addEventListener('change', (e) => {
    drawCurve(ctx_1_5, e.target.value)
})

