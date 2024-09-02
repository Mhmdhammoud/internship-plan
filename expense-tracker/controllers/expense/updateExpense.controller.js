module.exports = async (req, res) => {
  try {
    return res.status(201).json({})
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error: error.message
    })
  }
}
