const express = require('express');
const { getPositions, addPosition } = require('../conteoller/positionControllers');
const router = express.Router();

router.get('/', getPositions);
router.post('/', addPosition);

module.exports = router;
