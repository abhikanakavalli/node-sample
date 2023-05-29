const express = require('express')
const app = express()
const port = 4000

app.get("/", (req, res) => {
    res.status(200).send("<h1>Hello Abhi Kankavalli welcome to server!</h1>")
})

app.get('/api/v1/insta', (req, res) => {
    res.status(200).json({
        user: 'abhishek kanakavalli',
        role: 'Frontend Developers',
        experience: '1.5 years',
        date: Date.now()
    })
})

// app.get("api/v1/:token", (req, res) => {
//     console.log(req.params.token)
//     res.status(200).json({param: req.params.token})
// }) 

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})