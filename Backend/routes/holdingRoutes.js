const express = require('express');
const { getHoldings, addHolding } = require('../conteoller/holdingController');
const router = express.Router();

router.get('/', getHoldings);
router.post('/', addHolding);

module.exports = router;
