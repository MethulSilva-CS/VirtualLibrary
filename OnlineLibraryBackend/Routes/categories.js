const express = require('express');
const router = express.Router();
const categories = require('../Data/categories.json');

// GET /api/categories
router.get('/categories', (req, res) => {
  res.json(categories);
});

module.exports = router;
