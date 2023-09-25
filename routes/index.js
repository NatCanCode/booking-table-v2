const express = require('express');
const router = express.Router();

const reservationRouter = require('./reservation');
const roomRouter = require('./room');
const spotRouter = require('./spot');
const userRouter = require('./user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ message: "Hello, get!" });
});

router.post('/', function(req, res, next) {
  res.json({ message: "Hello, post!" });
});

router.put('/', function(req, res, next) {
  res.json({ message: "Hello, put!" });
});

router.delete('/', function(req, res, next) {
  res.json({ message: "Hello, delete!" });
});

router.use('/reservation', reservationRouter);
router.use('/room', roomRouter);
router.use('/spot', spotRouter);
router.use('/user', userRouter);

module.exports = router;