const number = +prompt('Введите число с дробной частью:');

console.log(`Округление до целого: ${Math.round(number)}`);
console.log(`Округление до целого в меньшую сторону: ${Math.floor(number)}`);
console.log(`Округление до целого в большую сторону: ${Math.ceil(number)}`);
console.log(`Удаление дробной части: ${Math.trunc(number)}`);
console.log(`Форматирование до двух знаков после запятой: ${number.toFixed(2)}`);
