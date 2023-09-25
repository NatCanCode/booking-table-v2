const express = require('express');
const router = express.Router();

/* GET */
router.get('/', function(req, res, next) {
  res.json({ message: "Hello, get spot!" });
});

router.post('/', function(req, res, next) {
  res.json({ message: "Hello, post spot!" });
});

router.put('/', function(req, res, next) {
  res.json({ message: "Hello, put spot!" });
});

router.delete('/', function(req, res, next) {
  res.json({ message: "Hello, delete spot!" });
});

module.exports = router;