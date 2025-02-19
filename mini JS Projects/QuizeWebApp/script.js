let db

// Open the IndexedDB database
const DBopenRequest = indexedDB.open('Quizes', 4)

DBopenRequest.onerror = event => {
  console.log('Error loading IndexedDB', event)
}

DBopenRequest.onsuccess = event => {
  db = event.target.result // Correct way to access the database
  console.log('IndexedDB is running now', db)
}

// Sample quiz data
const quizQuestions = [
  {
    Qns: 'Who was the first Prime Minister of India?',
    correctAns: 'Pandit Nehru',
    options: [
      'Pandit Nehru',
      'Dr. Rajendra Prasad',
      'Dr. B.R. Ambedkar',
      'Lal Bahadur Shastri'
    ]
  },
  {
    Qns: 'What is the capital of France?',
    correctAns: 'Paris',
    options: ['London', 'Berlin', 'Paris', 'Madrid']
  },
  {
    Qns: 'Which planet is known as the Red Planet?',
    correctAns: 'Mars',
    options: ['Venus', 'Jupiter', 'Mars', 'Saturn']
  },
  {
    Qns: 'Who invented the light bulb?',
    correctAns: 'Thomas Edison',
    options: [
      'Nikola Tesla',
      'Albert Einstein',
      'Thomas Edison',
      'Isaac Newton'
    ]
  },
  {
    Qns: 'Which is the largest ocean on Earth?',
    correctAns: 'Pacific Ocean',
    options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean']
  }
]

// Handle database upgrade (only runs when needed)
DBopenRequest.onupgradeneeded = event => {
  db = event.target.result

  db.onerror = event => {
    console.log('Error loading IndexedDB', event)
  }

  // Create an objectStore for this database
  const objectStore = db.createObjectStore('questions', { autoIncrement: true })

  objectStore.createIndex('Qns', 'Qns', { unique: true })
  objectStore.createIndex('correctAns', 'correctAns', { unique: false })
  objectStore.createIndex('options', 'options', { unique: false })

  objectStore.transaction.oncomplete = event => {
    // Store values in the newly created objectStore.
    const questionsObjStore = db
      .transaction('questions', 'readwrite')
      .objectStore('questions')
    quizQuestions.forEach(data => {
      questionsObjStore.add(data)
    })
    console.log('Quiz questions added to IndexedDB.')
  }
}
