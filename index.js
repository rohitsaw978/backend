const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('helo')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/rohit', (req, res) => {
    res.send("<h2>Helo Rohit</h2>")
})