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

const update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Data to update cannot be empty!'
    });
  }

  const id = req.params.id;

  Raid
    .findByIdAndUpdate(id, req.body, {useFindAndModify: false, new: true})
    .then(raidUpdate => {
      if (!raidUpdate) {
        res.status(404).json({
          message: `Cannot update raid wit id=${id}.`
        });
      } else {
        res.json(raidUpdate);
      }
    })
    .catch(() => {
      res.status(500).json({
        message: `Error occurred while updating raid with id ${id}`
      });
    });
};

module.exports = {getAll, update};
