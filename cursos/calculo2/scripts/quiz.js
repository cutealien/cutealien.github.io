const URL = 'https://quiz-records-default-rtdb.firebaseio.com'
const authSignup = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD_659whFdHZtOddMRI3jqPe1vFntLf9Cw'
const authLogin = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD_659whFdHZtOddMRI3jqPe1vFntLf9Cw'

var token
var userName
const loginForm = document.querySelector('[data-form=login]')

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

// Example POST method implementation:
const params = {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
}

const paramsGet = {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
}

var quizList
var currentQuiz
const quiz = document.querySelector('[data-quiz]')
const quizSelector = document.querySelector('[data-picker]')
const retryBtn = document.querySelector('[data-btn=retry]')

fetch(`/cursos/calculo2/scripts/quiz.json`, {...params, method: 'GET'})
.then(data => data.json())
.then(res => {
    quizList = res
    if(!quizList || quizList.length < 0) throw new Error('Error al cargar la prueba.')
    quizList.forEach((item, i) => {
        let element = document.createElement('option')
        element.value = i
        element.textContent = item.title
        quizSelector.append(element)
    })
})
.catch(error => showModalMessage(error))

const showModalMessage = function(message) {
    const messagesModal = document.querySelector('[data-modal=messages]')
    let modalContent = messagesModal.querySelector('[data-modal-content]')
    modalContent.textContent = ''
    let p = document.createElement('p')
    p.classList.add('paragraph')
    p.textContent = message
    modalContent.append(p)
    messagesModal.classList.add('modal--active')
}

const getRandomInt = function (max) {
    return Math.floor(Math.random() * max);
}

const generateRandomNumbersArray = function (maxNumber, totalNumbers) {
    let i = 0
    let indexes = []
 
    while(i < totalNumbers) {
        let newNumber = getRandomInt(maxNumber)
        if(!indexes.includes(newNumber)){
            indexes.push(newNumber)
            ++i
        }
    }
    return indexes
}

const generateQuiz = function(quiz, data) {
    var container = quiz.querySelector('[data-container=quiz]') 
    var quizLoader = quiz.querySelector('[data-loader=quiz]')

    quizLoader.classList.add('loader-box--active')

    const inputs = document.querySelectorAll('[data-option]')
    if(inputs.length > 0) {
        inputs.forEach(input => {
            input.removeEventListener('change', inputChange)
        })
    }
    removeChildNodes(container)
    
    quiz.querySelector('[data-title]').textContent = data.title
    let quizQuestionIndex = generateRandomNumbersArray(data.questions.length, 4)
    // data.questions.forEach((question, i) => {
    quizQuestionIndex.forEach((selectedQuestionIndex, i) => {
        let question = data.questions[selectedQuestionIndex]

        var newQuestion = document.createElement('div')
        newQuestion.classList.add('quiz__question')
        newQuestion.dataset.question = `question-${i}`
        newQuestion.dataset.answer = question.correctAnswer
        container.append(newQuestion)

        var questionParagraph = document.createElement('p')
        questionParagraph.classList.add('quiz__paragraph')
        typeset(() => {
            questionParagraph.textContent = question.question
            return [questionParagraph]
        });

        newQuestion.append(questionParagraph)

        question.answers.forEach((answer, j) => {
            var option = document.createElement('div')
            option.classList.add('quiz__option')
            newQuestion.append(option)
            var input = document.createElement('input')
            input.dataset.option = `option-${i}-${j}`
            input.type = 'radio'
            input.id = `option-${i}-${j}`
            input.name = `option-${i}`
            input.value = answer[0]
            input.required = true
            option.append(input)

            input.addEventListener('change', inputChange)

            var label = document.createElement('label')
            label.htmlFor = `option-${i}-${j}`
            option.append(label)
            typeset(() => {
                label.textContent = answer[1]
                return [label]
            })
        })
        var message = document.createElement('div')
        message.classList.add('quiz__answer')
        message.dataset.message = 'message'

        var sectionLink = document.createElement('a')
        sectionLink.dataset.sectionLink = data.questions[i].linkSection
        sectionLink.setAttribute("href", `/cursos/calculo2/${data.questions[i].linkSection}.html`)
        sectionLink.setAttribute("target", "_blank")
        sectionLink.classList.add('quiz__link', 'hidden')
        sectionLink.textContent = 'Sección: ' + data.questions[i].linkSection
        
        newQuestion.append(sectionLink)
        newQuestion.append(message)
    })
    var submitBtn = document.createElement('button')
    submitBtn.classList.add('btn-sm', 'btn--blue')
    submitBtn.type = 'submit'
    submitBtn.textContent = 'Enviar'
    container.append(submitBtn)
    quizLoader.classList.remove('loader-box--active')
}

const evaluateQuiz = function(quiz) {
    const questions = quiz.querySelectorAll('[data-question]')
    let score = 0
    let correctAnswers = []
    questions.forEach(question => {
        correctAnswers.push([question.dataset.question, question.dataset.answer])
    })
    var userData = Array.from(new FormData(quiz))
    let name = userData[0][1]
    let userAnswer = userData.slice(1)

    correctAnswers.forEach((element, i) => {
        // questions[i].classList.remove('quiz__question--answered')
        let message = questions[i].querySelector('[data-message]')
        let sectionLink = questions[i].querySelector('[data-section-link]')
        sectionLink.classList.remove('hidden')
        if(element[1] === userAnswer[i][1]) {
            score++
            message.classList.add('quiz__answer--correct')
            message.textContent = 'Correcto'
            return
        }
        message.classList.add('quiz__answer--incorrect')
        message.textContent = 'Incorrecto'
    })
    score = score / correctAnswers.length * 100
    const radioBtns = quiz.querySelectorAll('[data-option]')
    radioBtns.forEach(btn => {
        btn.disabled = true
    })
    quiz.querySelector('[type=submit]').disabled = true
    document.querySelector('[data-btn-box=retry]').classList.remove('hidden')
    return {name, score, quizType: quizList[currentQuiz].title}
}

const inputChange = function(el) {
    if(el.target.checked) {
        el.target.parentElement.parentElement.classList.add('quiz__question--answered')
    }
}

const removeChildNodes = function (parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.lastChild);
    }
}

loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const loader = document.querySelector('[data-loader=login]')
    loader.classList.add('loader-box--active')
    let login = {}
    var loginData = new FormData(loginForm)
    for(const entry of loginData) {
        login[entry[0]] = entry[1]
    }
    login['returnSecureToken'] = true
    const paramsLogin = {
        ...params,
        body: JSON.stringify(login) 
    }
    fetch(authLogin, paramsLogin)
    .then(data => data.json())
    .then(res => {
        loader.classList.remove('loader-box--active')
        if(res.error) throw new Error('Credenciales incorrectas')
        token = res.idToken
        loginForm.classList.add('form--hidden')
        document.querySelector('#quiz').classList.remove('quiz--hidden')
    })
    .catch(error => {
        showModalMessage('Datos incorrectos')
    })
})

quizSelector.addEventListener('change', (e) => {
    currentQuiz = +e.target.value
    if(quizList) {
        generateQuiz(quiz, quizList[currentQuiz])
    }
})

// questions.forEach(question => {
//     const optionGroup = question.querySelectorAll('[data-option]')
//     optionGroup.forEach(option => {
//         option.addEventListener('change', (el) => {
//             if(el.target.checked) {
//                 question.classList.add('quiz__question--answered')
//             }
//         })
//     })
// })

quiz.addEventListener('submit', (e) => {
    e.preventDefault()
    var data = evaluateQuiz(quiz)
    userName = data.name
    var paramsPost = {...params, body: JSON.stringify(data)}
    fetch(`${URL}/tests.json?auth=${token}`, paramsPost)
    .then(data => data.json())
    .then(res => {
        if(res.error) throw new Error(res.error)
        // document.querySelector('[data-btn-box=retry]').classList.remove('hidden')
        showModalMessage('Quiz enviado')
    })
    .catch(error => {
        showModalMessage(error)
    })
})

quiz.addEventListener('reset', (e) => {
    var input = quiz.querySelector('#ca_name')
    input.setAttribute('value', userName)
    const radioBtns = quiz.querySelectorAll('[data-option]')
    const questions = document.querySelectorAll('[data-question]')
    const messages = document.querySelectorAll('[data-message]')
    const sectionLinks = document.querySelectorAll('[data-section-link]')

    radioBtns.forEach(btn => {
        btn.disabled = false
    })
    quiz.querySelector('[type=submit]').disabled = false

    messages.forEach(message => {
        message.classList.remove('quiz__answer--correct', 'quiz__answer--incorrect')
        message.textContent = ''
    })

    sectionLinks.forEach(link => {
        link.classList.add('hidden')
    })
    questions.forEach(question => {
        question.classList.remove('quiz__question--answered')
    })
    document.querySelector('[data-btn-box=retry]').classList.add('hidden')

})