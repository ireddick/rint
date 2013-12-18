var RInt = function(n) { this.n = n }

RInt.prototype.toInt = function() { return this.n }

RInt.prototype.times = function(fn) {
  for (var i = 0; i < this.n; i++) { fn(i) }
}

RInt.prototype.isEven = function() { return this.n % 2 === 0 }

RInt.prototype.isOdd = function() { return this.n % 2 !== 0 }

RInt.prototype.upTo = function(end, fn) {
  for (var i = this.n; i <= end; i++) { fn(i) }
}

RInt.prototype.downTo = function(end, fn) {
  for (var i = this.n; i >= end; i--) { fn(i) }
}

RInt.prototype.next = function() { return this.n + 1 }

RInt.prototype.pred = function() { return this.n - 1 }

var rint = function(n) { return new RInt(n) }

describe("rint", function() {

  it("returns an instance of RInt for the given value", function() {
    expect(rint(7).toInt()).toEqual(7)
  })

})

describe("RInt", function() {
  describe("#toInt", function() {

    it("returns the wrapped value", function() {
      var subject = new RInt(7)
      expect(subject.toInt()).toEqual(7)
    })

  })

  describe("#times", function() {

    var fn

    beforeEach(function() {
      fn = jasmine.createSpy("fn")
    })

    it("calls the given function n times", function() {
      rint(3).times(fn)

      expect(fn.calls.length).toEqual(3)
    })

    it("does not call the given function when n is negative", function() {
      rint(-3).times(fn)

      expect(fn).not.toHaveBeenCalled()
    })

    it("passes each value from 0 to n-1", function() {
      var values = []
      rint(3).times(function(n) { values.push(n) })

      expect(values).toEqual([0, 1, 2])
    })

  })

  describe("#isEven", function() {

    it("returns true when n is even", function() {
      expect(rint(0).isEven()).toBeTruthy();
      expect(rint(1).isEven()).toBeFalsy();
      expect(rint(2).isEven()).toBeTruthy();
    })

  })

  describe("#isOdd", function() {

    it("returns true when n is odd", function() {
      expect(rint(0).isOdd()).toBeFalsy();
      expect(rint(1).isOdd()).toBeTruthy();
      expect(rint(2).isOdd()).toBeFalsy();
    })

  })

  describe("#upTo", function() {

    it("passes each value from n to the end value", function() {
      var values = []
      rint(2).upTo(5, function(n) { values.push(n) })

      expect(values).toEqual([2, 3, 4, 5])
    })

    it("does not call when the end value is less than n", function() {
      var fn = jasmine.createSpy("fn")
      rint(5).upTo(2, fn)

      expect(fn).not.toHaveBeenCalled()
    })

  })

  describe("#downTo", function() {

    it("passes each value from the end value to n", function() {
      var values = []
      rint(5).downTo(2, function(n) { values.push(n) } )

      expect(values).toEqual([5, 4, 3, 2])
    })

    it("does not call when the end value is greater than n", function() {
      var fn = jasmine.createSpy("fn")
      rint(2).downTo(5, fn)

      expect(fn).not.toHaveBeenCalled()
    })

  })

  describe("#next", function() {

    it("returns n + 1", function() {
      expect(rint(3).next()).toEqual(4)
    })

  })

  describe("#pred", function() {

    it("returns n - 1", function() {
      expect(rint(3).pred()).toEqual(2)
    })

  })
})
