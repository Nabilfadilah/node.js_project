const fs = require('fs');

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

module.exports = {loadContact}