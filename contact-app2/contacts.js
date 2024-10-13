const fs = require('fs');
const chalk = require('chalk');
const validator = require('validator');

// membuat folder data
const dirPath = "./data";
if(!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

// kondisi untuk cek apakah sudah ada folder data?, jika belum maka buatkan
const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8')
}

const simpanContact = (nama, email, noHp) => {
    const contact = {nama, email, noHp};
    const file = fs.readFileSync('data/contacts.json', 'utf8');
    const contacts = JSON.parse(file);

    // cek duplikat
    const duplikat = contacts.find((contact) => contact.nama === nama)
    if (duplikat) {
        console.log(chalk.red.inverse.bold('Contact sudah terdaftar, gunakan nama lain!'))
        return false
    }

    // cet email
    if(email) {
        if(!validator.isEmail(email)) {
            console.log(chalk.red.inverse.bold('email tidak valid!'))
            return false
        }
    }

    // cek no hp
    if(!validator.isMobilePhone(noHp, 'id-ID')) {
        console.log(chalk.red.inverse.bold('Nomor Hp tidak valid!'))
        return false
    }

    contacts.push(contact);

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

    console.log(chalk.green.inverse.bold('Terimakasih sudah memasukan data.'));       
}

module.exports = {simpanContact}

