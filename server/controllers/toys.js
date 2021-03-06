const router = require('express').Router();

const Toys = require('../models/toys');

router.get('/', (req, res) => {
    const { category, categoryType } = req.query;
    
    Toys.all({ category, categoryType }, (err, toys) => {
        res.json(toys);
    });
});

router.get('/popular', (req, res) => {
    Toys.popular((err, toys) => {
        res.json(toys);
    });
});

router.get('/:id', (req, res) => {
    Toys.get(req.params.id, (toy) => {
        res.json(toy);
    });
});

router.get('/:id/add-to-bag', (req, res) => {
    Toys.addToBag(req.params.id, (toy) => {
        res.json(toy.value);
    });
});

module.exports = router;