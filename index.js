var Transform = require('stream').Transform
var inherits = require('inherits')

module.exports = punkify

function punkify () {
  if (!(this instanceof punkify)) return new punkify()
  Transform.call(this, {objectMode: false})
  this.destroyed = false
}
inherits(punkify, Transform)

punkify.prototype._transform = function (data, enc, next) {
  var thing = data.toString().replace(/[^\S\n]/g, '{};')
  next(null, thing)
}

punkify.prototype.destroy = function (err) {
  if (this.destroyed) return
  this.destroyed = true
  this.err = err
  this.end()
}