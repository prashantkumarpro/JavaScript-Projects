let fetchedData = []

let db

// open the indexedDB
const DBopenRequest = indexedDB.open('attemptsHistory', 1)

DBopenRequest.onsuccess = event => {
  db = event.target.result
  console.log('IndexedDB is running now', db)
  fetchAttempts(db)
}

// Function to fetch all past attempts from IndexedDB
const fetchAttempts = db => {
  const transaction = db.transaction('attemptsHistory', 'readonly')
  const store = transaction.objectStore('attemptsHistory')
  const getAllRequest = store.getAll()

  // When data is retrieved successfully, update the fetchedData
  getAllRequest.onsuccess = () => {
    fetchedData = getAllRequest.result
    if (fetchedData.length > 0) {
      fetchedData.reverse().map((attemp, index) => {
        document.getElementById('attempt').innerHTML += `
        <li>Attempt ${index + 1} : ${attemp.score}/5 </li>
        `
      })
    } else {
      // console.log(fetchedData)
    }
  }
}
