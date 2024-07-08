const express = require('express')
var cors = require('cors')

const app = express()

app.use(cors())

app.get('/upload_img', function (req, res) {
    console.log('upload_img')
    res.send('Hello World')
})
console.log('running server');
app.listen(5000)