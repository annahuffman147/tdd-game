var isPalindrome = require('./implementation');
var expect = require('chai').expect;

describe('Palindrome Test', function() {

  it('should return true for palindromes', function() {
    expect(isPalindrome('radar')).to.equal(true);
  });


  it('should return false for non-palindromes', function() {
    expect(isPalindrome('apple')).to.equal(false);
  });


  it('should return undefined if no input is given', function() {
    expect(isPalindrome()).to.equal(undefined);
  });


  it('should return true if the tester is clever about his/her input', function() {
    var string = '', mid = Math.floor(Math.random() * 5) + 5;
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    while (string.length < mid) string += alphabet[Math.floor(Math.random() * alphabet.length)];
    while (mid--) string += string[mid];

    expect(isPalindrome(string)).to.equal(true);
  });

});
