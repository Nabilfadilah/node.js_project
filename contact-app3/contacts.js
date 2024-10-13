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

// load contact
const loadContact = () => {
    const file = fs.readFileSync('data/contacts.json', 'utf8');
    const contacts = JSON.parse(file);
    return contacts
}

const simpanContact = (nama, email, noHp) => {
    const contact = {nama, email, noHp};
    // const file = fs.readFileSync('data/contacts.json', 'utf8');
    // const contacts = JSON.parse(file);
    const contacts = loadContact()

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

// list contact di terminal
const listContact = () => {
    const contacts = loadContact()
    contacts.forEach((contact, i) => {
        console.log(`${i + 1}. ${contact.nama} - ${contact.noHp}`)
    })
}

// detail contact berdasarkan nama
const detailContact = (nama) => {
    const contacts = loadContact();

    const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase())

    if(!contact) {
        console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan!`))
        return false
    }

    // jika data nama ditemukan
    console.log(chalk.cyan.inverse.bold(contact.nama))
    if(contact.email) {
        console.log(contact.email)
    }
    console.log(contact.noHp)
}

// menghapus contact berdasarkan nama
const deleteContact = (nama) => {
    const contacts = loadContact()
    const newContacts = contacts.filter(
        (contact) => contact.nama.toLowerCase() !== nama.toLowerCase()
    )

    if(contacts.length === newContacts.length) {
        console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan!`))
        return false
    }

    fs.writeFileSync('data/contacts.json', JSON.stringify(newContacts));

    console.log(chalk.green.inverse.bold(`data contact ${nama} berhasil dihapus`));        
}

module.exports = {simpanContact, listContact, detailContact, deleteContact}

