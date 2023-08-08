const express = require('express');
const multer  = require("multer");
const router = express.Router();
const { dbConnection } = require('../db');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dirpath = path.join(__dirname, '../../frontend/src/assets/uploads');
    fs.mkdirSync(dirpath, { recursive: true })
    cb(null, dirpath);
  },
  filename: function (req, file, cb) {
    let extArray = file.mimetype.split("/");
    let extension = extArray[extArray.length - 1];
    cb(null, file.fieldname + '-' + Date.now() + '.' + extension)
  }
});

const upload = multer({storage: storage});

router.post('/goods', multer({storage: storage}).single('file'), async (req, res) => {

    let fileData = req.file,
        filePath;

    if(fileData) {
        filePath = fileData.path.split( '\\' ).slice(-2).join( '/' );
    }

    dbConnection.query(
        `INSERT INTO goods (title, description, price, image) VALUES(?,?,?,?)`, 
        [req.body.title, req.body.description, req.body.price, filePath],
        (err, result) => {
 
            if(!err) {
                res.json("Товар создан!");
            } else {
                res.json("Ошибка при создании товара!");
            }
        }
    );
});

router.get('/goods', async (req, res) => {
    dbConnection.query("SELECT * FROM goods", (err, result) => {
        res.json(result);
    });
});
router.get('/goods/:id', async (req, res) => {
    const id = req.params.id;
    dbConnection.query(`SELECT * FROM goods WHERE id=${id}`, (err, result) => {
        res.json(result);
    });
});
router.put('/goods', async (req, res) => {
    const body = req.body;
    const id = body.id;

    if(!id) {
        res.status(400).json({ message: "ID не указан" })
    }

    dbConnection.query(`UPDATE goods SET ? WHERE id= ?`, [body, id], (err, result) => {
        res.json(result);
    });
});
router.delete('/goods/:id', async (req, res) => {
    const id = req.params.id;

    if(!id) {
        res.status(400).json({ message: "ID не указан" })
    }

    dbConnection.query(`SELECT image FROM goods WHERE id=${id}`, (err, result) => {
        const imagePath = result[0]["image"];

        dbConnection.query(`DELETE FROM goods WHERE id=${id}`, (err, result) => {
            if(!err && imagePath) {
                fs.unlink(path.join(__dirname, `../../frontend/src/assets/${imagePath}`), (err) => {
                    if(err) res.json(err);
                });
                
                res.json(result);
            } else if(!err && imagePath === null) {
                res.json(result);
            } else {
                console.log(err);
            }
        });
    });
});

module.exports = router;