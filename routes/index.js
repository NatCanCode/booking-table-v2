const express = require('express')
const router = express.Router()
const reservationRouter = require('./reservation')
const roomRouter = require('./room')
const spotRouter = require('./spot')
const userRouter = require('./user')

// Test lint:
// const firstName = br > 'John'
// npm run lint

/* GET home page. */
router.get('/', (req, res, next) => {
  res.json({ message: 'Hello, get!' })
})

/* POST */
router.post('/', (req, res, next) => {
  res.json({ message: 'Hello, post!' })
})

/* PUT */
router.put('/', (req, res, next) => {
  res.json({ message: 'Hello, put!' });
});

/* DELETE */
router.delete('/', (req, res, next) => {
  res.json({ message: 'Hello, delete!' });
});

router.use('/reservation', reservationRouter);
router.use('/room', roomRouter);
router.use('/spot', spotRouter);
router.use('/user', userRouter);

module.exports = router;
