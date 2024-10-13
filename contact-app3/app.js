const yargs = require('yargs')
const contacts = require('./contacts')

// paramater dengan objek
yargs.command({
    command: 'add',
    describe: 'Menambahkan contact baru',
    builder: {
        nama: {
            describe: 'Nama lengkap',
            demandOption: true,
            type: 'string',
        },
        email: {
            describe: 'Email tinggal',
            demandOption: false,
            type: 'string',
        },
        noHp: {
            describe: 'No Telepon',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        contacts.simpanContact(argv.nama, argv.email, argv.noHp)
    }
}).demandCommand()

// menampilkan daftar semua nama & no hp contact
yargs.command({
    command: 'list',
    describe: 'Menampilkan semua nama & no Hp contact',
    handler() {
        contacts.listContact()
    }
})

// menampilkan detail sebuah contact
yargs.command({
    command: 'detail',
    describe: 'Menampilkan detail sebuah contact berdasarkan nama',
    builder: {
        nama: {
            describe: 'Nama lengkap',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        contacts.detailContact(argv.nama);
    }
})

// menghapus contact berdasarkan nama
yargs.command({
    command: 'delete',
    describe: 'Menghapus sebuah contact berdasarkan nama',
    builder: {
        nama: {
            describe: 'Nama lengkap',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        contacts.deleteContact(argv.nama);
    }
})

yargs.parse()


















// const contacts = require('./contacts')

// const main = async () => {
//     // const nama = await pertanyaan1()
//     // const email = await pertanyaan2()
//     // const job = await pertanyaan3()

//     // v-2
//     const nama = await contacts.tulisPertanyaan('Masukan nama anda : ')
//     const email = await contacts.tulisPertanyaan('Masukan email anda : ')
//     const job = await contacts.tulisPertanyaan('Masukan pekerjaan anda : ')

//     contacts.simpanContact(nama, email, job)
// }

// main()

