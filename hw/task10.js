const userString = prompt('Введите строку, содержащую число:').trim();

if (isNaN(+userString)) {
    console.log('Введённое значение не является числом.');

} else {
    const roundedNumber = Math.round(+userString);
    console.log(`Ваше число: ${roundedNumber}, длина строки: ${userString.length}`);

}
