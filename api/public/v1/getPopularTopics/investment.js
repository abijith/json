const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        "title" : "Everyday Investment",
        "topics" : [
            "Investment topic 1", 
            "Investment topic 2", 
            "Investment topic 3"
        ]
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        "title" : "Everyday Investment",
        "topics" : [
            "Investment topic 1", 
            "Investment topic 2", 
            "Investment topic 3"
        ]
    });
});

module.exports = router;