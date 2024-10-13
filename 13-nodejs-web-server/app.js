const http = require('http')

// ini code dari node.js
const port = 3000

http.createServer((req, res) => {
    res.write('Hi Nabill ganteng!')
    res.end()
})

.listen(port, () => {
    console.log(`Server running at on port 3000...`)
})