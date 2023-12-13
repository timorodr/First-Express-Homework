const express = require("express")

const app = express()

app.listen(3000, () => {console.log("Is this thing on")})

app.get("/greeting/:name", (req, res) => { 
    const firstName = req.params.name
    res.send(`Hello, stranger or should I say ${firstName}`)
})
// Any param we create with : (colon) is a variable and has to be targeted exactly how it is written when accessesing 
// req.params.name in this case bc param is /:name