const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const siswarouter = require("./siswa")
const userrouter = require ("./user")
const pelanggaranrouter = require ("./pelanggaran")
const transaksirouter = require ("./transaksi")



// const { error } = require("console")
// const { debugPort } = require("process")
// const { strictEqual } = require("assert")

const app = express()
app.use(express.static(__dirname));
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(siswarouter)
app.use(userrouter)
app.use(pelanggaranrouter)
app.use(transaksirouter)


app.listen(7000,() => {
    console.log("eheewww")
})