var express = require("express")
var app = express()
const PORT = process.env.PORT || 5000

app.get("/", function(req, res) {
    res.send("Hello World")
})

app.listen(PORT, () => {
    console.log("http://localhost:5000")
})
