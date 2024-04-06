// controllers/admin.js

const Product = require('../models/product');

exports.postAddProduct = async (req, res, next) => {
    
    try {
        const first_name=req.body.first_name;
        const last_name=req.body.last_name;
        const age=req.body.age;
        const id=req.body.id;
     
        
        const product = await Product.create({
            id: id,
            first_name: first_name,
            last_name: last_name,
            age: age,
        });

        console.log('Product created successfully');
        res.status(201).json({ message: 'Product created successfully' });
    } catch (err) {
        console.log('Error creating product:', err);
        res.status(500).json({ error: 'Database error' });
    }
};


exports.getIndex = async (req, res, next) => {
    try {
        const products = await Product.findAll({
            attributes:[
                'first_name'
            ]
        });
         res.status(200).send(products)
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Database error' });
    }
};

exports.getProductsById = async (req, res, next) => {
    const id=req.params.id
    try {
        const products = await Product.findAll({where:{id:id}});
         res.status(200).send(products)
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Database error' });
    }
};

exports.getUpdate = async (req, res, next) => {
    const id=req.params.id
    try {
        const products = await Product.update(req.body,{where:{id:id}});
         res.status(200).send(products)
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Database error' });
    }
};

exports.getDelete = async (req, res, next) => {
    const id=req.params.id
    try {
        await Product.destroy({where:{id:id}});
         res.status(200).send("deleted Successfully")
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Database error' });
    }
};

