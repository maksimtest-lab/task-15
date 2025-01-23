const start = +prompt('Введите начальное значение диапазона:');
const end = +prompt('Введите конечное значение диапазона:');
const num = +prompt('Введите число для проверки:');

const diffNum = Math.abs(end - start);
const isInteger = Number.isInteger(num);

if (num >= start && num <= end) {
    console.log(`Число ${num} находится в диапазоне [${start}, ${end}]`);
} else {
    console.log(`Число ${num} не находится в диапазоне [${start}, ${end}]`);
}

console.log(`Число ${num} является целым: ${isInteger}`);
console.log(`Разница между концами диапазона: ${diffNum}`);