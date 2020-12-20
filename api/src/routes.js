const express = require('express');
const router = express.Router();

const { version } = require('../package.json');
const crawlerController = require('./crawler/crawlerController');

router.get('/', (req, res) => {
    res.json({
        title: 'asksuite-crawler',
        version
    });
});

router.post('/search', crawlerController.search);

module.exports = router;