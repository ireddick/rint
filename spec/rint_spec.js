var RInt = function(n) { this.n = n }

RInt.prototype.toInt = function() { return this.n }

RInt.prototype.times = function(fn) {
  for (var i = 0; i < this.n; i++) { fn(i) }
}

RInt.prototype.isEven = function() { return this.n % 2 === 0 }

var rint = function(n) { return new RInt(n) }

describe("rint", function() {
  it("returns an instance of rint for the given value", function() {
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
})
