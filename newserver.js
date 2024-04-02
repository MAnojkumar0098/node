let express = require('express')
let app = express()

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => { res.sendFile(__dirname + '/index.html') })
app.post('/', (req, res) => {
    console.log(req.body.name,req.body.email)
    res.send('success')
})
app.listen(8000);