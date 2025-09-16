// database.js
const path = require("path");
const sqlite3 = require("sqlite3").verbose();

const DB_FILE = "users.db";
const DBSOURCE = path.resolve(__dirname, DB_FILE);

const db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.error("Could not connect to SQLite:", err.message);
    throw err;
  } else {
    console.log(`Connected to SQLite database at ${DBSOURCE}`);
    const sql = `
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        phone TEXT,
        company TEXT,
        street TEXT,
        city TEXT,
        zipcode TEXT,
        lat TEXT,
        lng TEXT
      )
    `;
    db.run(sql, (err) => {
      if (err) console.error("Error creating users table:", err.message);
      else console.log("Users table ready.");
    });
  }
});

module.exports = db;
