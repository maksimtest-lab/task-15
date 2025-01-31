const str = '12543';
let sum = 0;

for (let i = 0; i < str.length; i++) {
    sum += +str[i];
}
console.log(`Сумма цифр строки ${str} составляет ${sum}`);
