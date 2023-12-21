const express=require('express');
const apiController=require('../controller/API/handleEcommerceAPI');
const router=express.Router();

router.post('/products/create/',apiController.createProduct);
router.get('/products/',apiController.showProducts);
router.delete('/products/:id',apiController.deleteProduct);
router.post('/products/:id/update_quantity/',apiController.updateProduct);

module.exports=router;