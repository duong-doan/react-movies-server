const express  = require("express")

const app = express()

app.get("/hello", (req, res) => {
    res.json({abc :"hello"})
})

app.listen(5000, () => {
    console.log(`dang chay tren port 5000 a`)
})