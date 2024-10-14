const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const { loadContact, findContact, addContact, cekDuplikat } = require('./utils/contacts')
const { body, validationResult, check } = require('express-validator')
const session = require('express-session')
const cookieParse = require('cookie-parser')
const flash = require('connect-flash')

const app = express()
const port = 3000

// gunakan ejs
app.set('view engine', 'ejs')

// Third-party Middleware
app.use(expressLayouts) // ejs-layouts

// built-in middleware
app.use(express.static('public'))

// middleware
app.use(express.urlencoded({extended: true}))

// konfigurasi flash
app.use(cookieParse('secret'))
app.use(session({
    cookie: {maxAge: 6000},
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))
app.use(flash())

// home
app.get('/', (req, res) => {
    const mahasiswa = [
        {
            nama: 'galih',
            email: 'gaih@gmail.com'
        },
        {
            nama: 'kenau',
            email: 'keanu@gmail.com'
        },
        {
            nama: 'miranda',
            email: 'mira@gmail.com'
        }
    ]

    res.render('index', {
        nama: 'Fadilah', 
        title: 'Halaman Home',
        mahasiswa,
        layout: 'layouts/main-layout', 
    })
})

// about
app.get('/about', (req, res) => {
    res.render('about', {
        layout: 'layouts/main-layout', 
        title: 'Halaman About'
    })
})

// contact
app.get('/contact', (req, res) => {
    const contacts = loadContact()

    res.render('contact', {
        layout: 'layouts/main-layout', 
        title: 'Halaman Contact',
        contacts,
        msg: req.flash('msg')
    })
})

// halaman form add contact
app.get('/contact/add', (req, res) => {
    res.render('add-contact', {
        title: 'Form Tambah Data Contact',
        layout: 'layouts/main-layout', 
    })
})

// proses data contact
app.post('/contact', [
    body('nama').custom((value) => {
        const duplikat = cekDuplikat(value)
        if(duplikat) {
            throw new Error('Nama contact sudah digunakan!')
        }
        return true
    }),
    check('email', 'Email tidak valid!').isEmail(),
    check('noHp', 'No Hp tidak sesuai!').isMobilePhone('id-ID'),
    ], (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        // return res.status(400).json({errors: errors.array()})
        res.render('add-contact', {
            title: 'Form Tambah Data Contact',
            layout: 'layouts/main-layout',
            errors: errors.array()
        })
    } else {
        addContact(req.body)
        // kirimkan flash message
        req.flash('msg', 'Data contact berhasil ditambahkan!')
        res.redirect('/contact')
    }
    
})

app.get('/contact/:nama', (req, res) => {
    const contact = findContact(req.params.nama)

    res.render('detail', {
        layout: 'layouts/main-layout', 
        title: 'Halaman Detail Contact',
        contact
    })
})

// metode untuk menjalankan middleware
app.use('/', (req, res) => {
    res.status(404)
    res.send('<h1>404</h1>')  
  })

app.listen(port, () => {
  console.log(`Server running listening on port ${port}`)
})





















// const http = require('http')
// const fs = require('fs')

// // ini code dari node.js
// const port = 3000

// // render file html
// const renderHTML = (path, res) => {
//     fs.readFile(path, (err, data) => {
//         if(err) {
//             res.writeHead(404)
//             res.write('Error: file not found')
//         } else {
//             res.write(data)
//         }
//         res.end()
//     })
// }

// http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'text/html',
//     })
    
//     const url = req.url
//     // pake switch case
//     switch(url) {
//         case '/about':
//             renderHTML('./about.html', res) 
//             break
//         case './contact':
//             renderHTML('./contact.html', res)
//             break
//         default:
//             renderHTML('./index.html', res)
//             break
//     }

//     // pake if else
//     // if(url === '/about') {
//     //     renderHTML('./about', res)
//     // } else if (url === '/contact') {
//     //     renderHTML('./contact.html', res)
//     // } else {
//     //     renderHTML('./index.html', res)
//     // }

//     // res.write('Hi Nabill ganteng!')
//     // res.end()
// })

// .listen(port, () => {
//     console.log(`Server running at on port 3000...`)
// })