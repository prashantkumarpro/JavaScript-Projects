import quizQuestions from './data.js' // Import the quiz data

let currentQuestion = 0
let score = 0
let timeLeft = 30
let timer

function showQuestion () {
  document.getElementById(
    'question'
  ).textContent = `${quizQuestions[currentQuestion].Qns}👇`
  const optionsList = document.getElementById('options')
  optionsList.innerHTML = ''
  quizQuestions[currentQuestion].options.forEach(option => {
    const li = document.createElement('li')
    li.textContent = option
    li.onclick = () => checkAnswer(option, li)
    optionsList.appendChild(li)
  })
  resetTimer()
}

function checkAnswer (option, li) {
  if (option === quizQuestions[currentQuestion].correctAns) {
    li.classList.add('correct')
    score++
  } else {
    li.classList.add('wrong')
  }
  clearTimeout(timer)
  setTimeout(nextQuestion, 1000)
}

function nextQuestion () {
  if (currentQuestion + 1 < quizQuestions.length) {
    currentQuestion++
    showQuestion()
  } else {
    alert(`Quiz Over! Your Score: ${score}/${quizQuestions.length}`)
  }
}

function resetTimer () {
  timeLeft = 30
  document.getElementById('time-left').textContent = timeLeft
  clearInterval(timer)
  timer = setInterval(() => {
    timeLeft--
    document.getElementById('time-left').textContent = timeLeft
    if (timeLeft <= 0) {
      clearInterval(timer)
      nextQuestion()
    }
  }, 1000)
}

showQuestion()

let db

// Open the IndexedDB database
const DBopenRequest = indexedDB.open('QuizDB', 4)

DBopenRequest.onerror = event => {
  console.log('Error loading IndexedDB', event)
}

DBopenRequest.onsuccess = event => {
  db = event.target.result
  console.log('IndexedDB is running now', db)
}

// This event runs only when the database is newly created or upgraded
DBopenRequest.onupgradeneeded = event => {
  db = event.target.result

  db.onerror = event => {
    console.log('Error loading IndexedDB', event)
  }

  // Create an objectStore for this database
  const objectStore = db.createObjectStore('store', {
    keyPath: 'di',
    autoIncrement: true
  })

  objectStore.createIndex('score', 'score', { unique: true })
  objectStore.createIndex('time', 'time', { unique: false })

  console.log(objectStore)
}

function DBfeat(){
  console.log("this is new DB feat")
  console.log("this is new DB feat again")
}

function DFfeat2(){
  console.log("this is nwe DB feat2")
  console.log("this is nwe DB feat2 again")
}