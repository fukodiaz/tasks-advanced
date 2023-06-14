const router = require('express').Router()
const userController = require('../controllers/user')
const { body } = require('express-validator')
const User = require('../models/user')

router.post(
	'/signup',
	body('username').isLength({min: 8}).withMessage(
		'username must be at least 8 characters'),
	body('password').isLength({min: 8}).withMessage(
		'password must be at least 8 characters'),
	body('confirmPassword').isLength({min: 8}).withMessage(
		'confirmPassword must be at least 8 characters'),
	body('username').custom(value => {
		return User.findOne({username: value}).then(user => {
			if (user) {
				return Promise.reject('This username is already exists')
			}
		})
	}),
	userController.register
)

router.post(
	'/login',
	body('username').isLength({min: 8}).withMessage(
		'username must be at least 8 characters'),
	body('password').isLength({min: 8}).withMessage(
		'password must be at least 8 characters'),
	userController.login	
)

module.exports = router