const QuezController = require('../controllers/quez-controller')

const quezRouter = require('express').Router()

quezRouter.get('/', QuezController.getQuez)

module.exports = quezRouter