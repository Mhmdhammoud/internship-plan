const jwt = require('jsonwebtoken')
class Jwt {
  sign = (payload) =>
    jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '1h'
    })
  verify = (token) => jwt.verify(token, process.env.JWT_SECRET)
}
module.exports = new Jwt()
