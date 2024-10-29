import colors from "colors";
import { Request, Response } from "express";
import Product from "../models/Product.model";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.findAll({
      order: [["id", "DESC"]],
    });
    res.json({ data: products });
  } catch (err) {
    console.log(colors.blue.bold(`${err}`));
  }
};

export const getProductsById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const product = await Product.findByPk(id);
    if (!product) {
      res.status(404).json({ error: "Product not founded" });
    } else {
      res.json({ data: product });
    }
  } catch (err) {
    console.log(colors.blue.bold("CATCH"));
    console.log(err);
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { body } = req;

    const product = await Product.create(body);

    res.status(201).json({ data: product });
  } catch (err) {
    console.log(colors.blue.bold("CATCH"));
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const product = await Product.findByPk(id);
    if (!product) {
      res.status(404).json({ error: "Product not founded" });
    } else {
        await product.update(req.body);
        await product.save();
      res.json({ data: product });
    }
  } catch (err) {
    console.log(colors.blue.bold("CATCH"));
    console.log(err);
  }
};

export const updateAvailability = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const product = await Product.findByPk(id);
    if (!product) {
      res.status(404).json({ error: "Product not founded" });
    } else {
        product.availability = !product.availability
        await product.save();
      res.json({ data: product });
    }
  } catch (err) {
    console.log(colors.blue.bold("CATCH"));
    console.log(err);
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const product = await Product.findByPk(id);
    if (!product) {
      res.status(404).json({ error: "Product not founded" });
    } else {
        await product.destroy()
        await product.save();
      res.json({ data: `Product deleted` });
    }
  } catch (err) {
    console.log(colors.blue.bold("CATCH"));
    console.log(err);
  }
};
