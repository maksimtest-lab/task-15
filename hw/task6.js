const userString = prompt('Введите предложение:');
const firstFiveChars = userString.slice(0, 5);
const firstIndex = userString.indexOf('а');
const lastIndex = userString.lastIndexOf('а');
let newUserString = userString.padStart(userString.length + 3, '!');
    newUserString = newUserString.padEnd(newUserString.length + 3, '?');

console.log(`Первые 5 символов: ${firstFiveChars}`);
console.log(`Индекс первой буквы а: ${firstIndex}`);
console.log(`Индекс последней буквы а: ${lastIndex}`);
console.log(`Добавляет к началу строки 3 восклицательных знака и к концу 3 вопросительных знака: ${newUserString}`);
