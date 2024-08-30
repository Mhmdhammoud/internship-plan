const jwt = require('jsonwebtoken');
module.exports = async (req, res, next) => {
  try {
    const headers = req.headers;
    const authorizationHeader = headers.authorization;
    if (!authorizationHeader.startsWith('Bearer ')) {
      return res.status(403).json({
        message: 'Unauthenticated',
      });
    }
    // const encodedToken = authorizationHeader.split('Bearer ')[1]
    const encodedToken = authorizationHeader.slice(
      7,
      authorizationHeader.length
    );
    // alg: SHA256
    const decodedToken = jwt.verify(encodedToken, process.env.SECRET);
    req.payload = decodedToken;
    return next();
  } catch (error) {
    console.log(error.message);

    return res.status(403).json({
      message: 'Unauthenticated',
    });
  }
};
