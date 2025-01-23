const userString = prompt('Введите строку, содержащую число:');
const numberFromStr = parseFloat(userString);
const randomNumber = Math.floor(Math.random() * 10);

if (isFinite(numberFromStr)) {
    const result = numberFromStr * randomNumber;
    console.log(`Случайное число: ${randomNumber}`);
    console.log(`Извлечённое число: ${numberFromStr}. Умноженное число: ${result}`);

} else {
    console.log('Введённое значение не является числом.');

}
