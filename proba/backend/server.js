const express = require('express');
const app = express();
var cors = require('cors');
app.use(cors());
const mysql = require('mysql');

// Használj környezeti változókat a konfigurációkhoz
const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    database: "felveteli",
    user: "root",
    password: process.env.DB_PASSWORD // Biztonságos jelszó használata
});

app.get('/SelectAgazat', (req, res) => {
    const sqlParancsok = "SELECT agazat, nyek FROM tagozatok;";
    db.query(sqlParancsok, (err, result) => {
        if (err) {
            res.json(err);
        }
        res.json(result);
    });
});

app.listen(3001, () => {
  console.log(`Server running on port 3001`);
});
