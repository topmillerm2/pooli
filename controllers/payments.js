const mongoose = require('mongoose')
const Payment = require('../models/payment')

exports.create = function(req, res, done) {
	const { title, startDate, dDate, endDate, monthly, disburseAmount, poolId} = req.body
	const payment = new Payment({
		startDate,
		dDate,
		endDate,
		monthly,
		disburseAmount,
		title,
		_pool: poolId,
		_user: req.user.id
	})
	payment.save(err => {
		if(err) return done(err)
		res.send(payment)
	})
}