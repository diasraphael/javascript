'use strict';

// setting and getting values from items not editable by user eg paragraph

console.log(
  'para element text is',
  document.querySelector('.message').textContent
);
document.querySelector('.message').textContent = 'raphael';

// setting and getting values from items editable by user eg input

console.log(
  'input element text is',
  document.querySelector('.userInput').value
);
document.querySelector('.userInput').value = 'hello raphael';

// button click using add event listener

document.querySelector('.btn').addEventListener('click', function () {
  console.log(
    'para element text is',
    document.querySelector('.message').textContent
  );
  console.log(
    'input element text is',
    document.querySelector('.userInput').value
  );
});

// getting number from user, we need conversion from string to number
console.log('input element age is', document.querySelector('.userAge').value);
document.querySelector('.userAge').value = '20';
console.log(
  'input element age is',
  Number(document.querySelector('.userAge').value)
);

// manipulating the style

document.querySelector(body).style.backgroundColor = '#60b347';
document.querySelector(body).style.width = '30rem';

// TODO Guess the number
