const mongoose = require('mongoose');
const Pool = require('../models/pool');
const ParticipantSchema = require('../models/participant');

exports.create = function(req, res, done) {
  const {
    title,
    description,
    category,
    participants,
    rate,
    amount,
    date,
    position
	} = req.body;
	const name = req.user.first_name + " " + req.user.last_name.charAt(0) + "."
  const pool = new Pool({
    title,
    description,
    category,
    numOfParticipants: participants,
    participants: [{ user: req.user.id, position, name }],
    rate,
    amount,
    date,
    _user: req.user.id
  });
  pool.save(err => {
    if (err) {
      return done(err);
    }
    res.send(pool);
  });
};

exports.join = function(req, res, done) {
	Pool.findById(req.body.id, function(err, pool) {
		if(err) return done(err)
		const name = req.user.first_name+" "+ req.user.last_name.charAt(0)+"."
		pool.participants.push({ user: req.user.id, name, position: req.body.position,  })
		pool.save(err => {
			if(err) return done(err)
			res.send(pool)
		})
	})
}