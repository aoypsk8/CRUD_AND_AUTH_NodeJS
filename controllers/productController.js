const ProductModel = require("../Models/ProductModel");

// CREATE PRODUCT \\
exports.createProdct = async (req, res) => {
  try {
    const producted = await ProductModel(req.body).save();
    res.send(producted);
  } catch (error) {
    console.log(error);
    res.status(500).send("server error ");
  }
};

// GET ALL PRODUCT \\
exports.getAllProdct = async (req, res) => {
  try {
    const producted = await ProductModel.find({}).exec();
    res.send(producted);
  } catch (error) {
    console.log(error);
    res.status(500).send("server error ");
  }
};

// FIND ONE PRODUCT \\
exports.findOneProduct = async (req, res) => {
  try {
    const id = req.params.id
    const producted = await ProductModel.findOne({_id:id}).exec()

    res.send(producted)
  } catch (error) {
    console.log(error);
    res.status(500).send("server error ");
  }
};

// UPDATE PRODUCT \\
exports.updateProduct = async(req,res)=>{
    try {
        const id = req.params.id
        const producted = await ProductModel.findOneAndUpdate({_id:id},req.body,{new:true}).exec()
        console.log(producted)
        res.send("Update Product Sccuss !")
    } catch (error) {
        console.log(error);
        res.status(500).send("server error")
    }
}

// DELETE PRODUCT \\

exports.deleteProduct= async(req,res)=>{
    try {
        const id = req.params.id
        const producted = await ProductModel.findOneAndDelete({_id:id}).exec()
        console.log(producted);
        res.send("Delete product sccuss !")
    } catch (error) {
        console.log(error);
        res.status(500).send("server error")
    }
}