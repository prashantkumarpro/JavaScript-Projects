import quizQuestions from './data.js' // Import the quiz data

export let currentQuestion = 0
let score = 0
let timeLeft = 30
let timer
let fetchedData = []

// show the quesiton on UI
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

// function for check answer
function checkAnswer (option, li) {
  if (option === quizQuestions[currentQuestion].correctAns) {
    li.classList.add('correct')
    score++
  } else {
    li.classList.add('wrong')
  }
  clearTimeout(timer)
  setTimeout(nextQuestion, 500)
}

// function for next question
function nextQuestion () {
  if (currentQuestion + 1 < quizQuestions.length) {
    currentQuestion++
    showQuestion()
  } else {
    addAttempt(score)
    console.log(`Quiz Over! Your Score: ${score}/${quizQuestions.length}`)
    location.href = 'attempt.html'
  }
}

// reset tihe timer
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

// show the result on quiz end

showQuestion()

let db

// Open the IndexedDB database
const DBopenRequest = indexedDB.open('attemptsHistory', 1)

// This event runs only when the database is newly created or upgraded
DBopenRequest.onupgradeneeded = function () {
  db = DBopenRequest.result

  if (!db.objectStoreNames.contains('attemptsHistory')) {
    // If ther's no "attmpts" store
    db.createObjectStore('attemptsHistory', {
      keyPath: 'id',
      autoIncrement: true
    }) // create it
  }
}

DBopenRequest.onerror = event => {
  console.log('Error loading IndexedDB', event)
}

DBopenRequest.onsuccess = event => {
  db = event.target.result
  if (score !== undefined) {
    addAttempt(score)
  } else {
    addAttempt((score = 0))
  }
  console.log('IndexedDB is running now', db)
}

function addAttempt (finalScore) {
  const attempt = {
    score: finalScore,
    id: new Date().toLocaleTimeString()
  }
  const tx = db.transaction('attemptsHistory', 'readwrite')
  const store = tx.objectStore('attemptsHistory')
  store.add(attempt)

  // when the transcation is complete, fetch all update again to update the UI
  tx.oncomplete = () => {
    fetchAttempts(db)
    console.log('All done!')
  }
}

// Function to fetch all past attempts from IndexedDB
const fetchAttempts = db => {
  const transaction = db.transaction('attemptsHistory', 'readonly')
  const store = transaction.objectStore('attemptsHistory')
  const getAllRequest = store.getAll()

  // When data is retrieved successfully, update the attempts state
  getAllRequest.onsuccess = () => {
    fetchedData = getAllRequest.result
  }
}
