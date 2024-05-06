let express = require('express')
let app = express();
let routes = require('./routes/routes.js');

app.use('/hii', routes);

app.listen(2000, (req, res) => console.log('server active'));