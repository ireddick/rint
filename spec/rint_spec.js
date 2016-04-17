var rint = require('../lib/rint').rint


describe("rint", function() {

  it("returns an instance of RInt for the given value", function() {
    expect(rint(7).toInt()).toEqual(7)
  })

  it("accepts an instance of RInt as the value", function() {
    expect(rint(rint(3)).toInt()).toEqual(3)
  })

  it("accepts any argument we can find the value of", function() {
    var valuable = {
      valueOf: function() { return 42 }
    }

    expect(rint(valuable).toInt()).toEqual(42)
  })

  it("throws a TypeError if the value is not an integer", function() {
    var e = new TypeError("given value is not an integer")

    expect(function() {rint(1.1)}).toThrow(e)
    expect(function() {rint("error")}).toThrow(e)
    expect(function() {rint(undefined)}).toThrow(e)
    expect(function() {rint(NaN)}).toThrow(e)
  })

})

describe("RInt", function() {
  describe("#toInt", function() {

    it("returns the wrapped value", function() {
      expect(rint(7).toInt()).toEqual(7)
    })

  })

  describe("#valueOf", function() {

    it('returns the wrapped value', function() {
      expect(rint(9).valueOf()).toEqual(9)
    })

  })

  describe("#times", function() {

    it("calls the given function n times", function() {
      var fn = jasmine.createSpy("fn")
      rint(3).times(fn)

      expect(fn.calls.length).toEqual(3)
    })

    it("does not call the given function when n is negative", function() {
      var fn = jasmine.createSpy("fn")
      rint(-3).times(fn)

      expect(fn).not.toHaveBeenCalled()
    })

    it("passes each value from 0 to n-1", function() {
      var values = []
      rint(3).times(function(n) { values.push(n) })

      expect(values).toEqual([0, 1, 2])
    })

    it("partially applies when no function is given", function() {
      var values = []
      rint(3).times()(function(n) { values.push(n) })

      expect(values).toEqual([0, 1, 2])
    })

  })

  describe("#isEven", function() {

    it("returns true when n is even", function() {
      expect(rint(0).isEven()).toBeTruthy()
      expect(rint(1).isEven()).toBeFalsy()
      expect(rint(2).isEven()).toBeTruthy()
    })

  })

  describe("#isOdd", function() {

    it("returns true when n is odd", function() {
      expect(rint(0).isOdd()).toBeFalsy()
      expect(rint(1).isOdd()).toBeTruthy()
      expect(rint(2).isOdd()).toBeFalsy()
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

    it("partially applies when no function is given", function() {
      var values = []
      rint(2).upTo(5)(function(n) { values.push(n) })

      expect(values).toEqual([2, 3, 4, 5])
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

    it("partially applies when no function is given", function() {
      var values = []
      rint(5).downTo(2)(function(n) { values.push(n) })

      expect(values).toEqual([5, 4, 3, 2])
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
