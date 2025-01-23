const firstLastName = prompt('Введите имя и фамилию:').trim();
const [firstName, lastName] = firstLastName.split(' ');
const formattedFirstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
const formattedLastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
const result = formattedFirstName.padEnd(15, '*') + ' ' + formattedLastName;
console.log(result);
