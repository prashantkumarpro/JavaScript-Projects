import quizQuestions from "./data.js"; // Import the quiz data

let db;

// Open the IndexedDB database
const DBopenRequest = indexedDB.open("Quizes", 4);

DBopenRequest.onerror = (event) => {
    console.log("Error loading IndexedDB", event);
};

DBopenRequest.onsuccess = (event) => {
    db = event.target.result; // Correct way to access the database
    console.log("IndexedDB is running now", db);
};

// Handle database upgrade (only runs when needed)
DBopenRequest.onupgradeneeded = (event) => {
    db = event.target.result;

    db.onerror = (event) => {
        console.log("Error loading IndexedDB", event);
    };

    // Create an objectStore for this database
    const objectStore = db.createObjectStore("questions", { autoIncrement: true });

    objectStore.createIndex("Qns", "Qns", { unique: true });
    objectStore.createIndex("correctAns", "correctAns", { unique: false }); // Corrected to false
    objectStore.createIndex("options", "options", { unique: false });

    objectStore.transaction.oncomplete = (event) => {
        // Store values in the newly created objectStore.
        const questionsObjStore = db.transaction("questions", "readwrite").objectStore("questions"); // Fixed store name
        quizQuestions.forEach((data) => {
            questionsObjStore.add(data);
        });
        console.log("Quiz questions added to IndexedDB.");
    };
};
