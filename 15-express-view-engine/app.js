const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 3000

// gunakan ejs
app.set('view engine', 'ejs')
// ejs-layouts
app.use(expressLayouts)
  
app.get('/', (req, res) => {
    // res.sendFile('./index.html', {root: __dirname})
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

// app.get('/', (req, res) => {
//     res.render('index', {
//         nama: 'Fadilah',
//         layout: 'layouts/main-layout', 
//         title: 'Halaman Home'
//     })
// })

app.get('/about', (req, res) => {
    res.render('about', {
        layout: 'layouts/main-layout', 
        title: 'Halaman About'
    })
})

app.get('/contact', (req, res) => {
    res.render('contact', {
        layout: 'layouts/main-layout', 
        title: 'Halaman Contact'
    })
})

// app.get('/product/:id', (req, res) => {
//     // res.send(`Product ID : ${req.params.id}  <br> Caregory ID : ${req.query.category}`)
// })

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