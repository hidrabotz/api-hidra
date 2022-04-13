__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})
router.get('/api', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            prefix : '/',
            namabot: 'HidraBot',
            namaowner: 'Newton',
            instagram: 'newton_cant',
            youtube : 'HIDRA XYZ'
        }
    }
    res.json(config)
})

module.exports = router
.