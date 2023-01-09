const express = require("express")
var cors = require('cors')
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');
const app = express();
app.use(cors())


app.get('/', function (req, res) {
    res.send("hello world")
})


app.get('/service', function (req, res) {
     const result = excelToJson({
        source: fs.readFileSync('data.xlsx') // fs.readFileSync return a Buffer
    });
     res.send(result)
})

app.listen(3000)