const sqlite3 = require('sqlite3').verbose();

// Create a new database instance and open the connection
const db = new sqlite3.Database('./revisionApp.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error("Error opening database " + err.message);
    } else {
        console.log("Connected to the revisionApp database.");
    }
});

module.exports = db;