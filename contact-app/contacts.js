const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

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

// dibungkus dalam promise
// const pertanyaan1 = () => {
//     return new Promise((resolve, reject) => {
//         rl.question('Masukan nama anda : ', (nama) => {
//             resolve(nama)
//         })
//     }) 
// }

// const pertanyaan2 = () => {
//     return new Promise((resolve, reject) => {
//         rl.question('Masukan alamat anda : ', (alamat) => {
//             resolve(alamat)
//         })
//     }) 
// }

// const pertanyaan3 = () => {
//     return new Promise((resolve, reject) => {
//         rl.question('Masukan pekerjaan anda : ', (job) => {
//             resolve(job)
//         })
//     }) 
// }

// dibungkus dalam promise v-2 agar cuma satu fuctionnya
const tulisPertanyaan = (pertanyaan) => {
    return new Promise((resolve, reject) => {
        rl.question(pertanyaan, (nama) => {
            resolve(nama)
        })
    })
}

const simpanContact = (nama, alamat, job) => {
    const contact = {nama, alamat, job};
    const file = fs.readFileSync('data/contacts.json', 'utf8');
    const contacts = JSON.parse(file);

    contacts.push(contact);

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

    console.log('Terimakasih sudah memasukan data.');
        
    rl.close();
}

module.exports = {tulisPertanyaan, simpanContact}

// rl.question('Masukan nama anda : ', (name) => {
//     rl.question('Masukan alamat anda : ', (alamat) => {
//         rl.question('Masukan pekerjaan anda : ', (job) => {
       
//         const contact = {name, alamat, job};
//         const file = fs.readFileSync('data/contacts.json', 'utf8');
//         const contacts = JSON.parse(file);

//         contacts.push(contact);

//         fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

//         console.log('Terimakasih sudah memasukan data.');
        
//         rl.close();
//         })
//     })
// })