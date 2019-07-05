// https://blog.risingstack.com/your-first-node-js-http-server/

const http = require('http')
const port = 3000

const requestHandler = (request, response) => {
    console.log(request.url)
    response.end('AHOY! from the node server')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
    if (err) {
        return console.log('something went wrong:', err)
    }

    console.log(`Candle lit on port: ${port}`)
})