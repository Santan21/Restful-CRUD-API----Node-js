const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/productmodel')
const app = express()


//Declaring Routes - to run this app on my browser

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Node API')
})


app.get('/blog', (req, res) => {
    res.send('Blog API - this is leslie here')
})

app.post('/product', async(req, res) => {
    try {
       const product = await Product.create(req.body)
       res.status(200).json(product);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.mmessage})
    }
})

mongoose.set("strictQuery", false)
mongoose.connect(
    'mongodb+srv://admin:Realasvp44@leslieapi.scqttyb.mongodb.net/Leslie-API?retryWrites=true&w=majority')
    .then(() => {
        console.log('Connected to MongoDB')
        app.listen(3000, () => {
            console.log('Node API app is running on port 3000')
        });
    }).catch((error) => {
        console.log('error')
    })
