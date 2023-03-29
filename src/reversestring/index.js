/* 

pseduocode 1

turn str to array using split("")
use array reverse method to reverse the character
join using join method
return result

pseduocode 2

create empty string called reversed
for each character in provided string
take the character and add it to the start of reversed
return the reversed

*/

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
