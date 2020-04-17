const User = require('../models/User')
const bcrypt = require('bcryptjs')

module.exports = {
	async store(req, res) {
		try {
			const { email } = req.body

			if ( await User.findOne( {email} )) {
				return res.status(400).send({ error: 'User already exists '})
			}

			const user = await User.create(req.body)

			user.password = undefined
			
			return res.json(user)
		} catch (err) {
			return res.status(400).send({ error: 'Registration failed' })
		}
	},

	async auth(req, res) {
		const { email, password } = req.body

		const user = await User.findOne({ email }).select('+password')

		if(!user) {
			res.status(400).send({ error: 'User not found' })
		}

		if(!await bcrypt.compare(password, user.password)) {
			return res.status(400).send({ error: 'Invalid password' })
		}

		user.password = undefined

		res.json(user)
	}
}