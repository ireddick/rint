var RInt = function(n) { this.n = n }
RInt.prototype.toInt = function() { return this.n }

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

})
