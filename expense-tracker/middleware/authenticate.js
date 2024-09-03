const jwt = require('../utils/jwt')
module.exports = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization
    if (!authorization) {
      return res.status(403).json({
        message: 'Unauthorized'
      })
    }
    const isBearer = authorization.startsWith('Bearer')
    if (!isBearer) {
      return res.status(403).json({
        message: 'Unauthorized'
      })
    }
    const encodedToken = authorization.slice(7, authorization.length)
    if (!encodedToken) {
      return res.status(403).json({
        message: 'Unauthorized'
      })
    }
    const decodedPayload = await jwt.verify(encodedToken)
    if (!decodedPayload) {
      return res.status(403).json({
        message: 'Unauthorized'
      })
    }
    req.user = decodedPayload
    next()
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error: error.message
    })
  }
}
