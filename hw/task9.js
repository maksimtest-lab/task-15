const secretNumber = Math.floor(Math.random() * 100);
const userName = prompt('Введите своё имя:').trim();
const formattedName = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();

if (userName.length < secretNumber) {
    console.log(`В имени не хватает ${Math.abs(userName.length - secretNumber)} символов.`);

} else {
    console.log(`В имени лишних ${Math.abs(userName.length - secretNumber)} символов.`);

}

console.log(formattedName);
