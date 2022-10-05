const steps = document.querySelectorAll('.step')
var currentStep = 0

const questions = document.querySelectorAll('[data-question]')

// const radioGroup = questions.querySelectorAll('[data-option]')
// console.log(radioGroup);
// radioGroup.forEach(radio => {
//     radio.addEventListener('change', (el) => {
//         console.log(el.target.checked);
//     })
// });
const continueBtns = document.querySelectorAll('[data-btn=continue]')

continueBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if(currentStep < steps.length) {
            steps[currentStep].style.display = 'block'
            steps[currentStep].scrollIntoView(true)
            currentStep++
        }
        btn.disabled = true
    })
})

questions.forEach(question => {
    const btnAnswer = question.querySelector('[data-btn=answer]')
    btnAnswer.disabled = true

    const optionGroup = question.querySelectorAll('[data-option]')
    optionGroup.forEach(option => {
        option.addEventListener('change', (el) => {
            if(el.target.checked) {
                btnAnswer.disabled = false
            }
        })
    })


    question.addEventListener('submit', (e) => {
        e.preventDefault()

        var answer = e.target.dataset.answer
        var data = new FormData(question)
        var message = 'Incorrecto'
        var answerText = question.querySelector('p')

    
        answerText.classList.add('question__answer--failed')
        answerText.classList.remove('question__answer--success')
    
        for (const entry of data) {
            if(entry[1] === answer) {
                message = 'Correcto'
                answerText.classList.add('question__answer--success')
                answerText.classList.remove('question__answer--failed')
            }
            answerText.innerHTML = message
        }
        var options = question.querySelectorAll('input')
        options.forEach(option => {
            option.disabled = true
        });
        btnAnswer.disabled = true
        if(currentStep < steps.length) {
            continueBtns[currentStep].disabled = false
            continueBtns[currentStep].style.display = 'inline-block'
        }
    })
})