const contacts = require('./contacts')

const main = async () => {
    // const nama = await pertanyaan1()
    // const alamat = await pertanyaan2()
    // const job = await pertanyaan3()

    // v-2
    const nama = await contacts.tulisPertanyaan('Masukan nama anda : ')
    const alamat = await contacts.tulisPertanyaan('Masukan alamat anda : ')
    const job = await contacts.tulisPertanyaan('Masukan pekerjaan anda : ')

    contacts.simpanContact(nama, alamat, job)
}

main()

