import express from 'express'
import upload from '../middleware/multer.js'
import { addProduct, deleteProduct, lastestByType, listProduct, singleProduct, updateProduct } from '../controllers/productController.js'
import adminAuth from '../middleware/adminAuth.js'

const productRouter = express.Router()


productRouter.post('/add', adminAuth, upload.single('image'), addProduct)
productRouter.get('/list', listProduct)
productRouter.get('/latest-by-type', lastestByType)
productRouter.get('/single/:id', singleProduct)
productRouter.put('/update/:id', adminAuth, upload.single('image'),updateProduct)
productRouter.delete('/delete/:id', adminAuth,deleteProduct)



export default productRouter