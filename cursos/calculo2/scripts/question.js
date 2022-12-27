// const steps = document.querySelectorAll('.step')
// var currentStep = 0

const questions = document.querySelectorAll('[data-question]')
const continueBtns = document.querySelectorAll('[data-btn-continue]')

questionEvaluation = function(question, btnAnswer, answer) {

    var data = new FormData(question)
    var message = 'Incorrecto'
    var answerText = question.querySelector('p')
    var userAnswer = ''

    answerText.classList.add('question__answer--failed')
    answerText.classList.remove('question__answer--success')

    for (const entry of data) {
        userAnswer = entry[1]
        if(entry[1].toLowerCase() === answer) {
            message = 'Correcto'
            answerText.classList.add('question__answer--success')
            answerText.classList.remove('question__answer--failed')
        }
        answerText.innerHTML = message
    }
    var options = question.querySelectorAll('input')
    options.forEach(option => {
        option.disabled = true
        if(option.value === answer && option.nextElementSibling) {
            option.nextElementSibling.classList.remove('question__option--incorrect')
            option.nextElementSibling.classList.add('question__option--correct')
        }
        if(option.value === userAnswer && option.value !== answer && option.nextElementSibling) {
            option.nextElementSibling.classList.remove('question__option--correct')
            option.nextElementSibling.classList.add('question__option--incorrect')
        }
    });
    btnAnswer.disabled = true
    if(btnAnswer.nextElementSibling) {
        btnAnswer.nextElementSibling.disabled = false
        btnAnswer.nextElementSibling.style.display = 'inline-block'
    }
}

selectEvaluation = function(orderSelect, btnAnswer, answers) {
    
    var data = Array.from(new FormData(orderSelect))

    var correct = true
    var message = 'Correcto'
    var answerText = orderSelect.querySelector('p')
    var selects = orderSelect.querySelectorAll('select')

    data.forEach((value, index) => {
        if(value[1] !== answers[index]) {
            correct = false
        }
    })

    if(!correct) {
        message = 'Incorrecto'
        answerText.innerHTML = message
        answerText.classList.remove('question__answer--success')
        answerText.classList.add('question__answer--failed')
    }
    else {
        answerText.innerHTML = message
        answerText.classList.remove('question__answer--failed')
        answerText.classList.add('question__answer--success')
        
    }
    btnAnswer.nextElementSibling.disabled = false
    btnAnswer.nextElementSibling.style.display = 'inline-block'
    
    selects.forEach(select => select.disabled = true)
    btnAnswer.disabled = true
}

continueBtns.forEach(btn => {
    btn.addEventListener('click', () => {
		let section = document.querySelector(`[data-section=${btn.dataset.btnContinue}]`)
		section.classList.remove('section--hidden')
		section.classList.add('section--visible')
		section.scrollIntoView(true)
        btn.disabled = true
    })
})

questions.forEach(question => {
    const btnAnswer = question.querySelector('[data-btn-answer]')
    btnAnswer.disabled = true

    const optionGroup = question.querySelectorAll('[data-option]')
    optionGroup.forEach(option => {
        if(option.type === 'radio') {
            option.addEventListener('change', (el) => {
                if(el.target.checked) {
                    btnAnswer.disabled = false
                }
            })
        }
        if(option.type === 'text') {
            option.addEventListener('keyup', (el) => {
                btnAnswer.disabled = !el.target.value
            })
        }
    })

    question.addEventListener('submit', (e) => {
        e.preventDefault()
        questionEvaluation(question, btnAnswer, e.target.dataset.answer)
    })
})

const orderSelects = document.querySelectorAll('[data-order-select]')

orderSelects.forEach(orderSelect => {
    const btnAnswer = orderSelect.querySelector('[data-btn-answer]')

    btnAnswer.disabled = true

    const selects = orderSelect.querySelectorAll('select')

    selects.forEach(select => {
        select.addEventListener('change', (e) => {
            let asnwersCount = 0
            selects.forEach(select => {
                if(!!select.value) {
                    asnwersCount++
                }
            })
            if(asnwersCount === selects.length) {
                btnAnswer.disabled = false
            }
        })
    })
    orderSelect.addEventListener('submit', (e) => {
        e.preventDefault()
        selectEvaluation(orderSelect, btnAnswer, e.target.dataset.answer.split('_'))        

    })
})

const justificationProblems = document.querySelectorAll('[data-justification]')

justificationProblems.forEach(problem => {
    const formdata = problem.querySelector('[data-justification-form]')
    const texts = problem.querySelectorAll('[data-justification-text]')
    const btnAnswer = problem.querySelector('[data-btn-answer]')
    const options = problem.querySelectorAll('[data-option]')

    var answers = formdata.dataset.answer.split('_')
    var step = 0
    btnAnswer.disabled = true
    
    options.forEach(option => {
        option.addEventListener('change', (el) => {
            if(el.target.checked) {
                btnAnswer.disabled = false
            }
        })
    })

    formdata.addEventListener('submit', e => {
        e.preventDefault()
        var data = Array.from(new FormData(formdata))[0][1]

        texts[step].classList.remove('calculation__text--hidden')
        var nextStep = problem.querySelectorAll(`[data-justification-step='${step+1}']`)
        var t = problem.querySelector(`[value='${data}']`)
        console.log(answers[step], data)
        if(answers[step] === data) {
            nextStep[0].classList.add('correct')
        }
        else {
            nextStep[0].classList.add('error')
        }
        nextStep[0].innerHTML = `Tu respuesta: ${t.nextElementSibling.innerHTML}`
        nextStep.forEach(part => {
            part.classList.remove('calculation--hidden')
            part.scrollIntoView()
        })
        step++
        formdata.reset()
        if(step >= answers.length){
            btnAnswer.disabled = true
            btnAnswer.nextElementSibling.style.display = 'inline-block'
            btnAnswer.nextElementSibling.disabled = false
            options.forEach(option => option.disabled = true)
        }
    })
})