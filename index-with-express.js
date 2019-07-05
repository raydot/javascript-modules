// index.js
// see "index-without-express" for a comparison 

const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
    response.send('Hello from Express!')
})

app.listen(port, (err) => {
    if (err) {
        return console.log('something went wrong:', err)
    }

    console.log(`server is listening on ${port}`)
})