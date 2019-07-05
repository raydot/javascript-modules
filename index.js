// index.js
// This time with handlebars!

const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const port = 3000

const app = express()

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views/layouts')
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))

// Render to handlebars
app.get('/', (request, response) => {
    response.render('home', {
        name: 'Dave'
    })
})

app.listen(port, (err) => {
    if (err) {
        return console.log('rut roh:', err)
    }

    console.log(`A candle is lit on port: ${port}`)
})