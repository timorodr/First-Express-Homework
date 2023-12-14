const express = require("express")

const app = express()

app.listen(3000, () => {console.log("Is this thing on")})

//*************************** GREETINGS */

app.get("/greeting/:name", (req, res) => { 
    const firstName = req.params.name
    res.send(`Hello, stranger or should I say ${firstName}`)
})
// Any param we create with : (colon) is a variable and has to be targeted exactly how it is written when accessesing 
// req.params.name in this case bc param is /:name


//*************************** TIP CALCULATOR */

app.get("/tip/:total/:tipPercentage", (req, res) => {
    let total = req.params.total 
    let tipPercentage = req.params.tipPercentage
    // let tip = total * .20
    res.send(`${tipPercentage}`)
})

//*************************** MAGIC 8 BALL */

app.get("/magic/:question", (req, res) => {
    const magicQuestion = req.params.question
    const magicEigthBallArray = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    let answer = magicEigthBallArray[Math.floor(Math.random() * magicEigthBallArray.length)]
    res.send(`${magicQuestion}???
    <h1>${answer}</h1>
    `)
})


//*************************** TAKE ONE DOWN AND PASS IT AROUND */


app.get("/", (req, res) => {
    // const number = req.params.number
    res.send(`<h1>99 bottles of beer on the wall</h1>
    <a href="/98">Take one down, pass it around</a>`)
})

app.get("/:number_of_bottles", (req, res) => {
    const number = Number(req.params.number_of_bottles)
    const messageText = `${number} of bottles of beer on the wall`
    const takeOneDown = number - 1
    if(number === 0) {
        res.send(`<a href="/">Start Over</a>`)
    }
    console.log(typeof number)
    res.send(`
    <h1>${messageText}</h1>
    <a href="/${takeOneDown}">Take one down, pass it around</a>
    `
    )
})
// {/* <a href = "localhost:3000/...">99 bottles</a> */}