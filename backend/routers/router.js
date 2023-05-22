const express = require('express');
const router = express.Router();
const { dbConnection } = require('../db');

router.post('/goods', async (req, res) => {
    const body = req.body;
    
    dbConnection.query("INSERT INTO goods SET ?", [body], (err, result) => {
        res.json(result);
    });
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
    
    dbConnection.query(`DELETE FROM goods WHERE id=${id}`, (err, result) => {
        res.json(result);
    });
});

module.exports = router;