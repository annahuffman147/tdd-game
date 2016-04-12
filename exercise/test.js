var suite = require('./implementation');
var expect = require('chai').expect;

describe('TDD Game', function() {

  it('should return true if we are ready to have fun!', function() {
    expect(suite.connected()).to.equal(true);
  });

  it('should have function named "nthFibonacci"', function() {
    expect(typeof suite.nthFibonacci).to.equal('function');
  });

  it('should return 1 for inputs of 1 & 2', function() {
    expect(suite.nthFibonacci(1)).to.equal(1);
    expect(suite.nthFibonacci(2)).to.equal(1);
  });

  it('should return 2 for input of 3', function() {
    expect(suite.nthFibonacci(3)).to.equal(2);
  });

  it('should return an actual fibonacci number', function() {
    // expect(suite.nthFibonacci(Math.random() * 100)).to.equal(542);
    [1,1,2,3,5,8,13,21,34].forEach(function(number, index) {
      expect(suite.nthFibonacci(index + 1)).to.equal(number);
    });
  });

  it('should do something specific if we pass in something invalid', function() {
    expect(suite.nthFibonacci(-1)).to.equal(-1);
    expect(suite.nthFibonacci("one")).to.equal(-1);
  });
});
