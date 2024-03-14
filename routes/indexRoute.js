const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

// GET home page
router.get('/', indexController.getHomePage);

// POST
router.post('/', indexController.createResource);

// PUT
router.put('/', indexController.updateResource);

// DELETE
router.delete('/', indexController.deleteResource);

module.exports = router;


// const express = require('express');
// const router = express.Router();

// const reservationRouter = require('./reservationRoute');
// const roomRouter = require('./roomRoute');
// const spotRouter = require('./spotRoute');
// const userRouter = require('./userRoute');

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.json({ message: "Hello, get!" });
// });

// /* POST */
// router.post('/', function(req, res, next) {
//   res.json({ message: "Hello, post!" });
// });

// /* PUT */
// router.put('/', function(req, res, next) {
//   res.json({ message: "Hello, put!" });
// });

// /* DELETE */
// router.delete('/', function(req, res, next) {
//   res.json({ message: "Hello, delete!" });
// });

// router.use('/reservation', reservationRouter);
// router.use('/room', roomRouter);
// router.use('/spot', spotRouter);
// router.use('/user', userRouter);

// module.exports = router;
