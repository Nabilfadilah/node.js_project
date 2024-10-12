// core module
// File System
const fs = require('fs')

// menuliskan string ke file (synchronous)
// fs.writeFileSync('data/test.txt', 'Heloo word secara synchronous! ini .txt dalam folder')

// menuliskan string ke file (Asynchronous)
// fs.writeFile('data/testAsync.txt', 'Heloo word secara Asynchronous! ini .txt dalam folder', (e) => {
//     console.log(e)
// })

// membaca isi file (synchronous)
// const data = fs.readFileSync('data/test.txt', 'utf-8');
// // console.log(data.toString())
// console.log(data)

// membaca isi file (Asynchronous)
// fs.readFile('data/test.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data)
// });

// menuliskan string ke file (synchronous)
// fs.writeFileSync('data/contacts.json', '')

// membaca isi file (synchronous)
// const data = fs.readFileSync('data/contacts.json', 'utf-8');
// console.log(data)

// membaca semua tulisan pada commant promt
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

// rl.question('Masukan nama anda : ', (name) => {
//     rl.question('Masukan alamat anda : ', (alamat) => {
//         rl.question('Masukan pekerjaan anda : ', (job) => {
       
//         // callback
//         console.log(`Terimakasih ${name}, dengan alamat ${alamat}, yang memiliki pekerjaan sebagai ${job}.`);
//         rl.close();
//         })
//     })
// })

// membaca semua tulisan pada commant promt dan menyimpan dalam array file
rl.question('Masukan nama anda : ', (name) => {
    rl.question('Masukan alamat anda : ', (alamat) => {
        rl.question('Masukan pekerjaan anda : ', (job) => {
       
        const contact = {name, alamat, job};
        const file = fs.readFileSync('data/contacts.json', 'utf8');
        const contacts = JSON.parse(file);

        contacts.push(contact);

        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

        console.log('Terimakasih sudah memasukan data.');
        
        rl.close();
        })
    })
})
