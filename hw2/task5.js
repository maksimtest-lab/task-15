const regex = /\b(ii|in{1,3}i)\b/g;
const str = 'ii ini inni innni inoi inmi';
const matches = str.match(regex);
console.log(matches); // Output: [ 'ii', 'ini', 'inni', 'innni' ]

