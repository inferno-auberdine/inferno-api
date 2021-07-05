const db = require('../models');
const Raid = db.raids;

// newRaid function for post raid route
const getAll = (req, res) => {
  Raid.find()
    .then(raids => {
      res.status(200).json(raids);
    })
    .catch(err => {
      res.status(500).json({err});
    })
};

module.exports = {getAll};
