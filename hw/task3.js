const userNumber = +prompt('Введите число от 1 до 100:');
const randomNumber = Math.floor(Math.random() * 100);

console.log(`Случайное число: ${randomNumber}`);
console.log(`Введенное число: ${userNumber}`);

if (randomNumber > userNumber) {
    console.log('Случайное число больше.');
    console.log(`Возведение в степень: ${Math.pow(userNumber, randomNumber)}`);

} else if (randomNumber < userNumber) {
    console.log('Случайное число меньше.');
    console.log(`Возведение в степень: ${Math.pow(randomNumber, userNumber)}`);

} else {
    console.log('Числа равны! Возведение в степень не требуется?');
}

