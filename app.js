const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');


app.get('/', (req, res) =>{
    res.json({'result':"output"}) ;
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;

