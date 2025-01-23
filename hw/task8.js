const str1 = prompt('Введите первую строку:').trim();
const str1Formatted = str1.toLowerCase();
const str2 = prompt('Введите вторую строку:').trim();
const str2Formatted = str2.toLowerCase();

if (str1 === str2) {
    console.log('Строки равны.');

} else {
    console.log(`Разница в длине строк: ${Math.abs(str1.length - str2.length)}`);

}

console.log(`Повторяет первую строку: ${str1.repeat(str2.length)}`);
