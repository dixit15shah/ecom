import { Product } from '../models/Product.js';
import { rm } from 'fs';

export const createProduct = async (req, res) => {
  //only admin can create product so it is admin route
  try {
    if (req.user.role !== "admin")
      return res.status(403).json({
        message: "Unauthorized", // condition for checking user role
      });

    const { title, description, category, price, stock } = req.body;

    const image = req.file;

    if (!image)
      return res.status(400).json({
        message: "Please give image",
      });

    const product = await Product.create({
      title,
      description,
      category,
      price,
      stock,
      image: image?.path,
    });

    res.status(201).json({
      message: "Product Created",
      product,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};