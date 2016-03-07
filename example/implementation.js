module.exports = function(string) {
  // return true;


  // return string === 'radar';


  // if (arguments.length == 0) return undefined;
  // else return string === 'radar';


  if (arguments.length == 0) return undefined;
  else return string.toLowerCase() === string.toLowerCase().split('').reverse().join('');
};
