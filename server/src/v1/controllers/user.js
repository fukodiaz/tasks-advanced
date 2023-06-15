const User = require('../models/user')
const cryptoJS = require('crypto-js')
const jsonwebtoken = require('jsonwebtoken')	

const errors = [
	{
		param: 'username',
		msg: 'Invalid password or username'
	}
]

exports.register = async (req, res) => {
	const { password } = req.body

	try {
		req.body.password = cryptoJS.AES.encrypt(
			password,
			process.env.PASSWORD
		)

		const user = await User.create(req.body)
		const token = jsonwebtoken.sign(
			{id: user._id},
			process.env.TOKEN_KEY,
			{expiresIn: '24h'}
		)
		res.status(201).json({ user, token })

	} catch (err) {
		res.status(500).json(err)
	}
}

exports.login = async (req, res) => {
	const { username, password } = req.body
	try {
		const user = await User.findOne({ username }).select('password username')
		if (!user) {
			return res.status(401).json({ errors })
		}

		const decryptedPass = cryptoJS.AES.decrypt(
			user.password,
			process.env.PASSWORD
		).toString(cryptoJS.enc.Utf8)

		if (decryptedPass !== password) {
			return res.status(401).json({ errors })
		}

		user.password = undefined

		const token = jsonwebtoken.sign(
			{id: user._id},
			process.env.TOKEN_KEY,
			{expiresIn: '24h'}
		)

		res.status(200).json({ user, token })

	} catch (err) {
		res.status(500).json(err)
	}
}