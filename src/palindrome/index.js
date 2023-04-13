function palindrome(str) {
  return (
    str
      .split('')
      .reduce((accumulator, currentValue) => currentValue + accumulator, '') ==
    str
  );
}
module.exports = palindrome;
