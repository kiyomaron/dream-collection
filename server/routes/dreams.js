const Dream = require('../models/dream');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const dream = await new Dream(req.body).save();
        res.send(dream);
    } catch (error) {
        res.send(error);
    }
})

router.get('/', async (req, res) => {
    try {
        const dreams = await Dream.find();
        res.send(dreams);
    } catch (error) {
        res.send(error);
    }
})

router.put('/:id', async (req, res) => {
    try {
        const dream = await Dream.findOneAndUpdate(
            {_id: req.params.id},
            req.body
        )
        res.send(dream);
    } catch (error) {
        res.send(error);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const dream = await Dream.findByIdAndDelete(req.params.id);
        res.send(dream);
    } catch (error) {
        res.send(error);
    }
})

module.exports = router;