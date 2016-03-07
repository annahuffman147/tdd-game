var suite = require('./implementation');
var expect = require('chai').expect;

describe('TDD Game', function() {

  it('should return true if we are ready to have fun!', function() {
    expect(suite.connected()).to.equal(true);
  });

});
