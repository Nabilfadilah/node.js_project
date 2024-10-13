const http = require('http')
const fs = require('fs')

// ini code dari node.js
const port = 3000

// render file html
const renderHTML = (path, res) => {
    fs.readFile(path, (err, data) => {
        if(err) {
            res.writeHead(404)
            res.write('Error: file not found')
        } else {
            res.write(data)
        }
        res.end()
    })
}

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html',
    })
    
    const url = req.url
    // pake switch case
    switch(url) {
        case '/about':
            renderHTML('./about.html', res) 
            break
        case './contact':
            renderHTML('./contact.html', res)
            break
        default:
            renderHTML('./index.html', res)
            break
    }

    // pake if else
    // if(url === '/about') {
    //     renderHTML('./about', res)
    // } else if (url === '/contact') {
    //     renderHTML('./contact.html', res)
    // } else {
    //     renderHTML('./index.html', res)
    // }

    // res.write('Hi Nabill ganteng!')
    // res.end()
})

.listen(port, () => {
    console.log(`Server running at on port 3000...`)
})