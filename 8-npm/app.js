// import validator from 'validator';

const validator = require('validator');
const chalk = require('chalk');

// validator
// console.log(validator.isEmail('nabil@gmail.com'));
// console.log(validator.isMobilePhone('08521121212', 'id-ID')); 
// console.log(validator.isNumeric('0292190201209'))

// chalk
// console.log(chalk.italic.bgBlue.black("Hello Ngabbb"))
// const pesan = "Hello Kianta"
// console.log(chalk.bgRed.black(pesan))
const nama = "Gordon";
const pesan = chalk`lorem. menjadikan aset negara {bgBlue.black.bold is jhonson} yang berkualitas tinggi, 
untuk membangunkan anak bangsa. Nama saya : ${nama}`
console.log(pesan)