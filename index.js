/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!
function addABillion(num) {
  return num + 1000000000;
}

const newID = addABillion(oldID);
const ageIsValid = Number.isInteger(currentAge);

const randomNumber = Math.floor(Math.random() * 20);
const randomInteger = Math.floor(randomNumber);
const randomUserID = addABillion(randomInteger);
