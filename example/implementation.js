module.exports = function(string) {
  // if (string == 'radar') return true;

  // if (string == 'radar') return true;
  // else return false;

  // if (arguments.length == 0) return undefined;
  // else if (string == 'radar') return true;
  // else return false;

  return string && string == string.split('').reverse().join('');
};
