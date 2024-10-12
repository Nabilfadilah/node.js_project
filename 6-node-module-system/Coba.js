// const nama = 'nabil';
// const umur = 22;

// console.log(umur, nama)

// kita bisa export berbagai seperti:
// function
function cetakNama(name) {
    return `Ngaberss NGabbbb ${name}`
}

// varibel
const PI = 3.14;

// objek mahasiswa
const mahasiswa = {
    // property
    nama : 'Gobil',
    umur : 22,
    // method
    cetakMhs() {
        return `Hallo, saya mananya ${this.nama} dan saya ${this.umur} tahun.`
    }
}

// class
class Orang {
    constructor() {
        console.log('Object orang telah dibuat!!')
    }
}

// exportnya
// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

// bisa juga exportnya cuma sekali
// module.exports = {
//     cetakNama: cetakNama,
//     PI: PI,
//     mahasiswa: mahasiswa,
//     Orang: Orang
// }

// bisa juga peke E6 yang terbaru
module.exports = {cetakNama, PI, mahasiswa, Orang}


// console.log(cetakNama("SI DOELLLLl"))