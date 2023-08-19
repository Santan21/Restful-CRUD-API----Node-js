const express = require('express')
const app = express()

//Declaring Routes - to run this app on my browser

app.get('/', (req, res) => {
    res.send('My Node API')
})


app.listen(3000, () => {
    console.log('Node API app is running on port 3000')
})

