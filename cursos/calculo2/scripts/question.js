// const steps = document.querySelectorAll('.step')
// var currentStep = 0

const questions = document.querySelectorAll('[data-question]')
const continueBtns = document.querySelectorAll('[data-btn-continue]')

const questionEvaluation = function(question, btnAnswer, answer) {

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

/**
 * Continue Buttons
 */
continueBtns.forEach(btn => {
    btn.addEventListener('click', () => {
		let section = document.querySelector(`[data-section=${btn.dataset.btnContinue}]`)
		section.classList.remove('section--hidden')
		section.classList.add('section--visible')
		section.scrollIntoView(true)
        btn.disabled = true
    })
})

/**
 * Question with mupltiple options
 */
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

/**
 * Vertical justification
 */
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
        btnAnswer.disabled = true
        if(step >= answers.length){
            btnAnswer.disabled = true
            btnAnswer.nextElementSibling.style.display = 'inline-block'
            btnAnswer.nextElementSibling.disabled = false
            options.forEach(option => option.disabled = true)
        }
    })
})

/**
 * Right sided justification
 */
const justificationO = document.querySelectorAll('[data-j]')

const checkFormCompleted = (option, problem, totalQuestions) => {
  option.addEventListener('change', () => {
    const answers = Array.from(new FormData(problem))
    if (answers.length === totalQuestions) {
      problem.querySelector('[data-btn-answer]').disabled = false
    }
  })
}

const checkAnswers = (option, answer, correctAnswer) => {
  option.disabled = true
  if (option.value === correctAnswer) {
    console.log('correcto')
    option.parentElement.classList.add('justification__option--correct')
  }
  if (option.value === answer && option.value !== correctAnswer) {
    option.parentElement.classList.add('justification__option--error')
  }
}

justificationO.forEach(problem => {
  const correctAnswers = problem.dataset.answer.split('_')
  const optionsBlock = problem.querySelectorAll('[data-options-block]')
  const btnSubmit = problem.querySelector('[data-btn-answer]')

  optionsBlock.forEach(block => {
    const options = block.querySelectorAll(`[data-option]`)
    options.forEach(option => checkFormCompleted(option, problem, optionsBlock.length))
  })

  problem.addEventListener('submit', e => {
    e.preventDefault()
    console.log('asd')
    const answers = Array.from(new FormData(problem))
    if (answers.length !== optionsBlock.length) {
      return
    }
    console.log(answers, correctAnswers)
    btnSubmit.disabled = true
    if (btnSubmit.nextElementSibling) {
      btnSubmit.nextElementSibling.disabled = false
      btnSubmit.nextElementSibling.style.display = 'inline-block'
    }

    optionsBlock.forEach((block, i) => {
      const options = block.querySelectorAll(`[data-option]`)
      options.forEach(option => checkAnswers(option, answers[i][1], correctAnswers[i]))
    })
  })
})