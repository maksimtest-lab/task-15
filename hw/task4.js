const userNumber = +prompt('Введите число:');

if (isFinite(userNumber)) {
    const roundedNumber = Math.round(userNumber);
    const absNumber = Math.abs(roundedNumber);
    const squaredNumber = Math.pow(absNumber, 2);

    console.log(`Округленное до целого: ${roundedNumber}`);
    console.log(`Модуль: ${absNumber}`);
    console.log(`Квадрат: ${squaredNumber}`);
} else {
    console.log('Число бесконечно!');
}
