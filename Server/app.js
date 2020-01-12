const exress = require('express')
const app = exress()
const port = '3001'

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen( port, () => {
    console.log('App running on ' + port)
})

app.get('/users', (req, res) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.json({name:' Nitin', lastName: 'Sharma'})
})


