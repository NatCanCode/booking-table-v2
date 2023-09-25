const express = require('express');
const router = express.Router();

/* GET */
router.get('/', function(req, res, next) {
  res.json({ message: "Hello, get room!" });
});

router.post('/', function(req, res, next) {
  res.json({ message: "Hello, post room!" });
});

router.put('/', function(req, res, next) {
  res.json({ message: "Hello, put room!" });
});

router.delete('/', function(req, res, next) {
  res.json({ message: "Hello, delete room!" });
});

module.exports = router;