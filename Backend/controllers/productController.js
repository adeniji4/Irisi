import {v2 as cloudinary} from 'cloudinary'
import productModel from '../models/products.js'

//add product
const addProduct = async (req, res) => {
  try {
    const { name, description, price, category, fabric, sizes, type } = req.body;

    // Check for uploaded file
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'Product image is required' });
    }


    // Upload to Cloudinary
    const cloudinaryResult = await cloudinary.uploader.upload(req.file.path, {
      folder: 'products', // Optional: organize images in a folder
      resource_type: 'image'
    });

    // Normalize type (e.g., lowercase)
    const normalizedType = type?.trim().toLowerCase();

    // Create new product
    const newProduct = new productModel({
      name,
      description,
      price: Number(price),
      category,
      type: normalizedType,
      fabric,
      sizes: JSON.parse(sizes),
      image: cloudinaryResult.secure_url,
      imagePublicId: cloudinaryResult.public_id // Store public_id for future management
    });

    await newProduct.save();
    
    res.status(201).json({ 
      success: true, 
      message: 'Product added successfully', 
      product: newProduct 
    });
  } catch (error) {
    console.error('Add product error:', error);
    res.status(500).json({ 
      success: false, 
      message: error.message || 'Failed to add product' 
    });
  }
};



//get all product
const listProduct = async (req, res) => {
  try {
    const products = await productModel.find({})
    res.json({success: true, products})
  } catch (error) {
    console.log(error)
    res.json({success: false, message: error.message})
  }
}

//delete
const deleteProduct = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    // Delete image from Cloudinary
    if (product.imagePublicId) {
      await cloudinary.uploader.destroy(product.imagePublicId);
    }

    // Delete product from DB
    await product.deleteOne();
    res.json({success: true, message: 'Product and image deleted' });
  } catch (error) {
    res.status(500).json({success: false, message: error.message });
  }
};

const singleProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await productModel.findById(id);

    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    res.json({ success: true, product });
  } catch (error) {
    console.log('Error fetching product:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

//update product
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, category, fabric,sizes, type } = req.body;

    // Find product and check existence
    const product = await productModel.findById(id);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    // Handle image update if new file is uploaded
    if (req.file) {
      try {
        // Delete old image from Cloudinary if exists
        if (product.imagePublicId) {
          await cloudinary.uploader.destroy(product.imagePublicId);
        }

        // Upload new image to Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path, {
          folder: 'products' // optional folder in Cloudinary
        });

        // Update with new image information from Cloudinary
        product.image = result.secure_url;
        product.imagePublicId = result.public_id;

      } catch (cloudinaryError) {
        console.error('Cloudinary error:', cloudinaryError);
        return res.status(500).json({ 
          success: false, 
          message: 'Error updating product image' 
        });
      }
    }


    // Update product fields only if they are provided in the request
    const updates = {
      name: name !== undefined ? name : product.name,
      description: description !== undefined ? description : product.description,
      price: price !== undefined ? price : product.price,
      category: category !== undefined ? category : product.category,
      type: type !== undefined ? type : product.type,
      fabric: fabric !== undefined ? fabric : product.fabric,
      // sizes : parsedSizes
      // sizes: sizes !== undefined ? sizes : product.sizes
      sizes: sizes !== undefined ? (typeof sizes === 'string' ? JSON.parse(sizes) : sizes) : product.sizes
    };

    Object.assign(product, updates);

    // Save the updated product
    const updatedProduct = await product.save();

    res.status(200).json({ 
      success: true, 
      message: 'Product updated successfully', 
      product: updatedProduct 
    });
  } catch (error) {
    console.error('Update product error:', error);
    res.status(500).json({ 
      success: false, 
      message: error.message
    });
  }
};

const lastestByType = async (req, res) => {
  try {
    const latestProducts = await productModel.aggregate([
      // Sort by createdAt (newest first)
      { $sort: { createdAt: -1 } },

      // Group by type and take the first one (most recent)
      {
        $group: {
          _id: "$type",
          doc: { $first: "$$ROOT" }
        }
      },

      // Replace root with the actual product document
      { $replaceRoot: { newRoot: "$doc" } }
    ]);
    res.json({success: true, latestProducts});
  } catch (error) {
    console.error('Update product error:', error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}

export {listProduct, addProduct, deleteProduct, singleProduct, updateProduct, lastestByType}