var times = function(n, fn) {
  for (var i = 0; i < n; i++) { fn(i) }
}

var range = function(start, end, fn) {
  if (start < end) {
    for (var i = start; i <= end; i++) { fn(i) }
  } else {
    for (var i = start; i >= end; i--) { fn(i) }
  }
}

var RInt = function(n) { this.n = n }

RInt.prototype.toInt = function() { return this.n }

RInt.prototype.valueOf = RInt.prototype.toInt

RInt.prototype.times = function(fn) {
  if (fn) { times(this.n, fn) }
  else {
    var n = this.n
    return function(fn) { times(n, fn) }
  }
}

RInt.prototype.isEven = function() { return this.n % 2 === 0 }

RInt.prototype.isOdd = function() { return this.n % 2 !== 0 }

RInt.prototype.upTo = function(end, fn) {
  if (end < this.n) { return }
  if (fn) { range(this.n, end, fn) }
  else {
    var start = this.n
       ,end = end
    return function(fn) { range(start, end, fn) }
  }
}

RInt.prototype.downTo = function(end, fn) {
  if (end > this.n) { return }
  if (fn) { range(this.n, end, fn) }
  else {
    var start = this.n
       ,end = end
    return function(fn) { range(start, end, fn) }
  }
}

RInt.prototype.next = function() { return this.n + 1 }

RInt.prototype.pred = function() { return this.n - 1 }

var rint = function(n) {
  if (n % 1 !== 0) {
    throw new TypeError("given value is not an integer")
  }

  return new RInt(n)
}

exports.rint = rint
