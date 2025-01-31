const regex = /i..i/g;
const str = 'ini ioi idi inni iodi inoi';
const matches = str.match(regex);
console.log(matches); // Output: [ 'inni', 'iodi', 'inoi' ]