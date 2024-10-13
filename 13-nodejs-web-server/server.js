const http = require('http')
const url = require('url') // tambah module untuk mendapatkan metode

// panggil handler
const handler = require('./handler');

// ini code dari devsaurus.com
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    // res.write('Hi Nabill!')
    // res.end()
    const requestUrl = url.parse(req.url, true)

    // GET endpoint
    if (requestUrl.pathname === '/greeting' && req.method === 'GET') {
        handler.sayHello(req, res)
    }
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})