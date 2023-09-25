const express = require('express');
const router = express.Router();

/* GET */
router.get('/', function(req, res, next) {
  res.json({ message: "Hello, get reservation!" });
});

router.post('/', function(req, res, next) {
  res.json({ message: "Hello, post reservation!" });
});

router.put('/', function(req, res, next) {
  res.json({ message: "Hello, put reservation!" });
});

router.delete('/', function(req, res, next) {
  res.json({ message: "Hello, delete reservation!" });
});

module.exports = router;