const express = require('express');
const app = express();
var cors = require('cors');
app.use(cors());
const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    database: "felveteli",
    user: "root",
    password: ""
});
app.get('/felvetRangsor', (req, res) => {
    const sqlParancsok = "SELECT tagozatok.agazat, CONCAT(tagozatok.agazat, ' ', CASE WHEN tagozatok.nyek = 1 THEN 'nyek' ELSE '' END) AS agazat_nyek_status FROM tagozatok;"
    db.query(sqlParancsok, (err, result)=> {
        if(err){
            res.json(err);
        }
        res.json(result);  
    })
})

app.get('/rangSor', (req, res) => {
    const sqlParancsok = `
        SELECT diakok.nev, 
        ((diakok.hozott*2) + diakok.kpmagy + diakok.kpmat) AS hozott, 
        CONCAT(tagozatok.agazat, ' ', 
        CASE WHEN tagozatok.nyek = 1 THEN 'nyek' ELSE '' END) 
        AS agazatNyek
        FROM diakok
        INNER JOIN jelentkezesek ON diakok.oktazon = jelentkezesek.diak
        INNER JOIN tagozatok ON tagozatok.akod = jelentkezesek.tag
        ORDER BY hozott DESC, diakok.nev ASC LIMIT 4;
    `;
    db.query(sqlParancsok, (err, result) => {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.json(result);
        }
    });
});

app.get('/selectMenu', (req, res) => {
    const sqlParancsok = `
        SELECT * FROM tagozatok;
    `;
    db.query(sqlParancsok, (err, result) => {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.json(result);
        }
    });
});

app.get('/felvetRangsor/:id', (req, res) => {
    const sqlParancs = 'SELECT nev, tagozatok.agazat, diakok.hozott + diakok.kpmagy + diakok.kpmat AS osszpontszam FROM `diakok` INNER JOIN jelentkezesek ON diakok.oktazon = jelentkezesek.diak INNER JOIN tagozatok ON tagozatok.akod = jelentkezesek.tag WHERE tagozatok.akod = ? ORDER BY diakok.hozott + diakok.kpmagy + diakok.kpmat DESC LIMIT 4;'
    db.query(sqlParancs, req.params.id, (err, result) => {
        res.json(result)
    })
})

app.get('/felvetNyek/:id', (req, res) => {
    const sqlParancs = 'SELECT tagozatok.agazat, tagozatok.nyek, IF(tagozatok.nyek = 1, "Nyelvi előkészítő", "Nem nyelvi előkészítő") AS elokeszito, SUM(jelentkezesek.hely) AS helyekszama FROM `diakok` INNER JOIN jelentkezesek ON diakok.oktazon = jelentkezesek.diak INNER JOIN tagozatok ON tagozatok.akod = jelentkezesek.tag WHERE tagozatok.akod = ? ORDER BY diakok.hozott + diakok.kpmagy + diakok.kpmat DESC LIMIT 1;'
    db.query(sqlParancs, req.params.id, (err, result) => {
        res.json(result)
    })
})

app.listen(3001, () => {
    console.log(`Example app listening on port 3001`);
});
