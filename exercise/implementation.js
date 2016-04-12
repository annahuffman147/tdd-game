module.exports = {
  connected: () => true,
  isPrime: function(number) {
    // number === prime
  },
  nthFibonacci: fibonacciMaker(),
  sumOfPrimesUpTo: function(number) {
    // 20 => 2+3+5+7+11+13+17+19
  },
  getLargestPrimeFactor: function(number) {
    //256 => 2
  },
  countUniqueLetters: function(word) {
    // applecore => 7
  },
  areTheseAnagrams: function(word1, word2) {
    // 'banana', 'naanba' => true
  },
  addCommasToNumber: function(number) {
    // 123456789 => '123,456,789'
  },
  itemOverlap: function(array1, array2) {
    // returns array of items that are in both arrays
  }
};

function fibonacciMaker() {
  var bucket = {

  };
  return function(number) {
    if (typeof number != 'number' || number < 1) {
      return -1;
    }
    if (bucket[number]) return bucket[number];
    if (number == 1 || number == 2) {
      bucket[number] = 1;
      return 1;
    } else {
      bucket[]
      return this.nthFibonacci(number -1) + this.nthFibonacci(number -2);
    }
  }
}
