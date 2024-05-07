const { initialState } = require('../model/instanceModel')

module.exports = {
  getInstance(req, res) {
    res.json(initialState(req.query.data))
  }
}