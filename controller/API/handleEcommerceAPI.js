const Product = require("../../models/API/products");

//function to create new product
module.exports.createProduct = async function (req, res) {
    // console.log('name',req.body);
  try {
    let product = await new Product({
      name: req.body.name,
      quantity: req.body.quantity
    });
    product.save();
    if (product) {
      res.send("Product added Successfully ✌️");
    } else {
      res.send("add correct data in body");
    }
  } catch (error) {
    res.send("Error", error);
  }
};

//function to show all products
module.exports.showProducts = async function (req, res) {
  try {
    let products = await Product.find({});
    if (products) {
      res.send(products);
    } else {
      res.send("There is no any product..!");
    }
  } catch (error) {
    res.send(error);
  }
};

// function to delete product using id
module.exports.deleteProduct = async function (req, res) {
  try {
    let deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (deletedProduct) {
      res.send({
        product: deletedProduct,
        message: "product deleted..!",
      });
    }else{
        res.send(" plz provide correcte Id, Id is not found");
    }
    
  } catch (error) {
    res.send("Error******",error);
  }
};

//function to update products
module.exports.updateProduct = async function (req, res) {
  try {
    //find product from id
    let product=await Product.findById(req.params.id);
    if(product){
        //To increase or decrease quantity use positive or negative integer resp.
        const newQty= product.quantity + parseInt(req.query.number);

        //update newQty in original product
        let updatedProd=await Product.findByIdAndUpdate(req.params.id,{quantity:newQty});
        if(updatedProd){
            res.send({
                product:updatedProd,
                message:" product updated Successfully"
            });
        }else{
            res.send("product is not updated...try again");
        }
    }else{
        res.send("product not found");
    }
  } catch (error) {
    res.send(error);
  }
};
