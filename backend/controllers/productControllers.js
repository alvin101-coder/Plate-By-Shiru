import productModel from "../models/productModels.js"
import { v2 as cloudinary } from 'cloudinary'

const addProduct = async (req, res) => {
  try {
    const { name, price, description, category } = req.body
    const image = req.file
    let imageUrl = ""

    if (image) {
      const result = await cloudinary.uploader.upload(image.path, { resource_type: 'image' })
      imageUrl = result.secure_url
    } else {
      imageUrl = "https://via.placeholder.com/150"
    }

    const productData = {
      name,
      description,
      category,
      price: Number(price),
      image: imageUrl,
      date: Date.now()
    }

    const product = new productModel(productData)
    await product.save()

    res.json({ success: true, message: "Product added successfully", product })
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: "Cannot add product" })
  }
}

const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({})
    res.json({ success: true, products })
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: error.message })
  }
}

const removeProduct = async (req, res) => {
  try {
    const { id } = req.params
    await productModel.findByIdAndDelete(id)
    res.json({ success: true, message: "Product removed" })
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: error.message })
  }
}

const singleProduct = async (req, res) => {
  try {
    const { id } = req.params
    const product = await productModel.findById(id)
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" })
    }
    res.json({ success: true, product })
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: error.message })
  }
}

export { addProduct, listProducts, removeProduct, singleProduct }
