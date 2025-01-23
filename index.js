// Method log
console.log('lesson 15');

// Свойства
const maxValue = Number.MAX_VALUE;
const minValue = Number.MIN_VALUE;
const NaNValue = Number.NaN;
const positiveInfinity = Number.POSITIVE_INFINITY;
const negativeInfinity = Number.NEGATIVE_INFINITY;

console.log(maxValue);
console.log(minValue);
console.log(NaNValue);
console.log(positiveInfinity);
console.log(negativeInfinity);

// Методы
const num = 5.456;
const fixedNum = num.toFixed(2);

console.log(fixedNum);

// Строки

const strWithNum = '45.4xxx';
const numFromStr = Number(strWithNum);
console.log(numFromStr);

// Проверка на число
const isNum = Number.isNaN(5);
console.log(isNum);

// Проверка на число
const num2 = 5.45;
console.log(Math.floor(num2));
console.log(Math.round(num2));
console.log(Math.ceil(num2));

// Проверка на число
const num3 = -5.56;
console.log(Math.abs(num3));
console.log(0+num3);

// Max number
const max = Math.max(1, 2, 3, 4, 5);
console.log(max);

// Min number
const min = Math.min(1, 2, 3, 4, 5);
console.log(min);

// Math sqrt
const sqrt = Math.sqrt(25);
console.log(sqrt);

// Math pow
const pow = Math.pow(2, 3);
console.log(pow);

// Дробная часть
const num4 = 5.456;
console.log(Math.trunc(num4));

// Math random
console.log(Math.random());
console.log(Math.random() * 1000);
console.log(Math.floor(Math.random() * 1000));


// String
const str = '                   Hello                       ';
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());

// Includes
const str2 = 'Hello';
console.log(str2.includes('llo'));
console.log(str2.includes('llo', 1));

// StartsWith
const str3 = 'Hello';
console.log(str3.startsWith('H'));
console.log(str3.startsWith('H', 1));

// EndsWith
const str4 = 'Hello';
console.log(str4.endsWith('o'));
console.log(str4.endsWith('o', 1));

// Slice
const str5 = 'Hello';
console.log(str5.slice(1));
console.log(str5.slice(1, 3));
console.log(str5.slice(-1));
console.log(str5.slice(-3, -1));

// CharAt
const str6 = 'Hello';
console.log(str6.charAt(0));
console.log(str6.charAt(1));
console.log(str6.charAt(2));
console.log(str6.charAt(3));
console.log(str6.charAt(4));
console.log(str6.charAt(5));
console.log(str6.charAt(6));

// IndexOf
const str7 = 'Hello';
console.log(str7.indexOf('l'));
console.log(str7.indexOf('l', 1));
console.log(str7.indexOf('l', 2));

// LastIndexOf
const str8 = 'Hello';
console.log(str8.lastIndexOf('l'));
console.log(str8.lastIndexOf('l', 1));
console.log(str8.lastIndexOf('l', 2));

// Repeat
const str9 = 'Hello';
console.log(str9.repeat(3));

// PadStart
const str10 = 'Hello';
console.log(str10.padStart(10, '0'));
console.log(str10.padEnd(10, '0'));

// PadEnd
const str11 = 'Hello';
console.log(str11.padStart(10, '0'));
console.log(str11.padEnd(10, '0'));

// Split
const str12 = 'Hello';
console.log(str12.split(''));
console.log(str12.split('l'));
console.log(str12.split('l', 1));