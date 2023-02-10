const calculateBodyMassIndex = function (weight, height) {
  return weight / height ** 2;
};
const result1 = calculateBodyMassIndex(95, 1.88);
const result2 = calculateBodyMassIndex(85, 1.72);

console.log(
  'The body bass index is',
  result1,
  result2,
  calculateBodyMassIndex(95, 1.88) - calculateBodyMassIndex(85, 1.72)
);
