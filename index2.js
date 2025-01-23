const fioString = prompt('Введите ФИО:');

let fioNew = fioString.trimStart().trimEnd();

let indexOfSpace = fioNew.indexOf(' ');

let firstName = fioNew.slice(0, indexOfSpace);
let lastName = fioNew.slice(indexOfSpace + 1);

let firstNameFormatted = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
let lastNameFormatted = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
let result = firstNameFormatted + ' ' + lastNameFormatted;

console.log(fioNew);
console.log(result);
