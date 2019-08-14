const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        "title" : "Insurance",
        "topics" : [
            "Insurance Topic 1", 
            "Insurance Topic 2",
            "Insurance Topic 3"
        ]
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        "title" : "Insurance",
        "topics" : [
            "Insurance Topic 1", 
            "Insurance Topic 2",
            "Insurance Topic 3"
        ]
    });
});

module.exports = router;