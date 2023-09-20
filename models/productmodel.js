const mongoose = require('mongoose')

const productSchema = moongoose.Schema (
    {
      name: {
        type: String,
        required: [true, "please enter a product name"]
      } ,
      quantity: {
          type: Number,
          required: 0
      },
      price: {
        type: Number,
        required: false
      },
      image: {
        type: String,
        required:false
      }
    },
    {
        timestamps: true
    }
)
const Product = moongoose.model('Product', productSchema);

module.exports= Product;