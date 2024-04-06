const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();


router.post('/product', adminController.postAddProduct);

router.get('/product-details', adminController.getIndex);

router.get('/single_element/:id', adminController.getProductsById);

router.put('/update_element/:id', adminController.getUpdate);

router.delete('/delete/:id', adminController.getDelete);



module.exports = router;
