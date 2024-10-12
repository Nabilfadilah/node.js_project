// const nama = "nabull fadilah"

// () = argumen
// const cetakNama = (nama) => `Hi, nama sata ${nama}`
// console.log(cetakNama('gordon ramsay'))
// console.log(window)

// untuk memanggil file lain
// require('./Coba')

// contoh fungsi require
// const fs = require('fs') // core module
// const moment = require('moment') // third party module / npm module / node_modules
// const cetakNama = require('./Coba') // local module

const coba = require('./Coba')

console.log(coba.cetakNama('Addullll'), coba.PI, coba.mahasiswa.cetakMhs(), new coba.Orang()) 
// console.log(cetakNama('Addullll')) 