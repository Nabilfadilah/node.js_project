const express = require('express')
const app = express()
const port = 3000
  
app.get('/', (req, res) => {
    // kirimkan response nya
    // res.send('Hello World! abill gantenggg')
    // res.json({
    //     nama: 'Nabilla Hamdani',
    //     email: 'nabila@gmail.com',
    //     noHp: '085627811922'
    // })
    res.sendFile('./index.html', {root: __dirname})
})
app.get('/about', (req, res) => {
    // res.send('ini halaman about Ngabbb')
    res.sendFile('./about.html', {root: __dirname})
})
app.get('/contact', (req, res) => {
    // res.send('Conatttttttt')
    res.sendFile('./contact.html', {root: __dirname})
})

app.get('/product/:id', (req, res) => {
    // res.send(`Product ID : ${req.params.id}  <br> Caregory ID : ${req.params.idCat}`)
    res.send(`Product ID : ${req.params.id}  <br> Caregory ID : ${req.query.category}`)
})
// req = adalah apa yang dikirimkan ke express
// res = adalah apa yang dikembalikan oleh express

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