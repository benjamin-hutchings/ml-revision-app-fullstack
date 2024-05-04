const sqlite3 = require('sqlite3').verbose();

// Function to open the database
function openDatabase(path) {
    return new sqlite3.Database(path, sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            console.error("Error opening database " + err.message);
        } else {
            console.log("Connected to the revisionApp database.");
        }
    });
}

// Function to add a new concept
function addConcept(db, topicId, name, definition) {
    const sql = `INSERT INTO concepts (topicId, name, definition) VALUES (?, ?, ?)`;
    
    db.run(sql, [topicId, name, definition], function(err) {
        if (err) {
            console.error(err.message);
        } else {
            console.log(`A new concept has been added with ID: ${this.lastID}`);
        }

        // Close the database connection here after the operation
        db.close((err) => {
            if (err) {
                console.error(err.message);
            }
            console.log('Database connection closed.');
        });
    });
}

const db = openDatabase('./revisionApp.db');
const topicId = process.argv[2];
const name = process.argv[3];
const definition = process.argv[4];

if (!topicId || !name || !definition) {
    console.log("Please provide topicId, name, and definition for the concept.");
    db.close();
} else {
    addConcept(db, topicId, name, definition);
}
