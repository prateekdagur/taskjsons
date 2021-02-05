const express = require('express')
const jsonData = require('../models/data')
const router = express.Router()
const data = require('../data')
router.get('/data_enter', async function (req, res) {
    try {
        let createData = await jsonData.bulkCreate(data)
        res.send(createData)
    }
    catch (err) {
        res.status(500).send(err.message)
    }
})
router.get('/get_data', async function (req, res) {
    try {
        value = req.query
        console.log(value)
        const getData = await jsonData.findAll({ where: value });


        res.send(getData);
    }
    catch (err) {
        res.status(500).send(err.message)
    }
})

module.exports = router