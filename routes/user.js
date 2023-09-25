const express = require('express');
const router = express.Router();

/* GET */
router.get('/', function(req, res, next) {
  res.json({ message: "Hello, get user!" });
});

router.post('/', function(req, res, next) {
  res.json({ message: "Hello, post user!" });
});

router.put('/', function(req, res, next) {
  res.json({ message: "Hello, put user!" });
});

router.delete('/', function(req, res, next) {
  res.json({ message: "Hello, delete user!" });
});

module.exports = router;