function reverse(str) {
  return str
    .split('')
    .reduce((accumulator, currentValue) => currentValue + accumulator, '');
  /* solution 3:
  let reversedString = '';
  for (let character of str) {
    reversedString = character + reversedString;
  }
  return reversedString; */
  /* Solution 2:
  return str.split('').reverse().join(''); */
  /* Solution 1:
  let reversedString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString = reversedString + str[i];
  }
  return reversedString; */
}
module.exports = reverse;
