const router = require('express').Router()
const quezRouter = require('./quezRouter')

router.use('/quiz', quezRouter)

module.exports = router