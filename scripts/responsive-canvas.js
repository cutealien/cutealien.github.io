var canvas
var ctx
var btn

function createCanvas() {
    const canvas = document.createElement('canvas')
    canvas.classList.add('canvas')
    document.getElementById('canvas-container').appendChild(canvas)
    
    return canvas
    
}

function createButton() {
    const button = document.createElement('button')
    button.innerHTML = 'Remove';
    button.addEventListener('click', () => {
        removeCanvas()
    })
    document.getElementById('canvas-container').appendChild(button)
    return button
}

function sizeCanvas () {                
    if (canvas === undefined) {         
        canvas = createCanvas();        
        ctx = canvas.getContext("2d");  
    }
    canvas.width = window.innerWidth * .9
    canvas.height = window.innerHeight * .9
}

function removeCanvas () {
    if (canvas !== undefined) {              
        removeEventListener("resize", sizeCanvas)   
        document.getElementById('canvas-container').removeChild(canvas)
        document.getElementById('canvas-container').removeChild(button)

        ctx = undefined                  
        canvas = undefined    
        button = undefined
     }
}

sizeCanvas()
button = createButton()
addEventListener("resize", sizeCanvas); 