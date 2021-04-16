const Product = require("../models/product");
const dotenv = require("dotenv");
const connectDatabase = require("../config/database");

const product = require("../data/product.json");
const { connect } = require("mongoose");

// setting dotenv file
dotenv.config({ path: "backend/config/config.env" });

connectDatabase();

const seedProducts = async () => {
  try {
    await Product.deleteMany();
    console.log("Product are deleted successfully ");

    await Product.insertMany(product);
    console.log("All products are inserted successfully");

    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedProducts();
