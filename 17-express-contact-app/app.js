const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const { loadContact, findContact } = require('./utils/contacts')
const app = express()
const port = 3000

// gunakan ejs
app.set('view engine', 'ejs')

// Third-party Middleware
app.use(expressLayouts) // ejs-layouts

// built-in middleware
app.use(express.static('public'))

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
        contacts
    })
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