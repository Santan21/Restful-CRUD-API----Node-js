const mongoose = require('mongoose')

const productSchema = mongoose.Schema (
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
const Product = mongoose.model('Product', productSchema);

module.exports= Product;