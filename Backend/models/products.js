import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type : String,
    required : true
  },
  description: {
    type: String,
    required: true
  },
  price : {
    type: Number,
    required : true
  },
  category: {
    type: String,
    required: true
  },
  type : {
    type: String,
    required: true
  },
  fabric: {
    type: String,
    required: true
  },
  sizes : {
    type: Array,
    required : true
  },
  image: {
    type: String,
    required: true
  },
  imagePublicId: {
    type: String,
    required: true
  }
}, { timestamps: true })

const productModel = mongoose.models.product || mongoose.model('product', productSchema)

export default productModel
