const Position = require('../models/positionSchema');

exports.getPositions = async (req, res) => {
  try {
    const positions = await Position.find();
    res.json(positions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addPosition = async (req, res) => {
  try {
    const newPosition = await Position.create(req.body);
    res.status(201).json(newPosition);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
