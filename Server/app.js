const exress = require('express')
const app = exress()
const port = '3001'
var path = require('path');

// app.get('/', (req, res) => {
//     res.send('Hello World');
// })

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
  });
  

app.listen( port, () => {
    console.log('App running on ' + port)
})

app.get('/users', (req, res) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.json({name:' Nitin', lastName: 'Sharma'})
})

