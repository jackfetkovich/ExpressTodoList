const pug = require('pug')

exports.renderFile = (req, res, next) => {
  res.render('notes', {notes: req.notes})
}