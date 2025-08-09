const Holding = require('../models/holdingschema');

// GET all holdings
exports.getHoldings = async (req, res) => {
  try {
    const holdings = await Holding.find();
    res.json(holdings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ADD new holding
exports.addHolding = async (req, res) => {
  try {
    const newHolding = await Holding.create(req.body);
    res.status(201).json(newHolding);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
