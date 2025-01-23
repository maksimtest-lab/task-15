const userString = prompt('Введите строку:');

console.log(`Длина строки: ${userString.length}`);
console.log(`Верхний регистр: ${userString.toUpperCase()}`);
console.log(`Нижний регистр: ${userString.toLowerCase()}`);
console.log(`Содержит ли строка подстроку JavaScript? - ${userString.includes('JavaScript') ? 'Да' : 'Нет'}`);
console.log(`Замена пробелов на дефисы: ${userString.replaceAll(' ', '-')}`);
