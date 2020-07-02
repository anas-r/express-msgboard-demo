var express = require('express');
const Message = require('../entities/Message');
const MessageRepository = require('./index').messages;

var router = express.Router();


/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('new');
});

router.post('/', function (req, res) {
    const newMsg = new Message(req.body)
    newMsg.persist(MessageRepository)
    res.redirect('/')
})

module.exports = router;
