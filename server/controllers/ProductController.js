import Product from "../models/Product.js";

const createProduct = async (req,res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (err) {
        res.status(400).json({error:err.message})
    }
};

const getProducts = async (req,res) => {
    try {
        const products = await Product.find();
        res.json(products)
    } catch (err) {
        res.status(500).json({error:err})
    }
}

const updateProduct = async (req,res) => {
    try {
        const product = await Product.findById(req.params.id);
        if(!product) return res.status(404).json({error : "Product not found"});

        if(req.body.stock_quantity < 0){
            return res.status(400).json({error:"Stock cannot negative"});
        }

        Object.assign(product,req.body);
        await product.save();
        res.json(product);
    } catch (err) {
        return res.status(400).json({error:err.message});
    }
}

const deleteProduct = async (req,res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if(!product) return res.status(404).json({error:"Product not found"})
        res.json({message:"Product deleteded"})    
    } catch (err) {
        res.status(500).json({error:err.message})
    }
}

const increaseStock = async (req,res) => {
    try {
        const {quantity} = req.body;
        const product = await Product.findById(req.params.id);
        if(!product) return res.status(404).json({error:"Product not found"})

        product.stock_quantity += quantity;
        await product.save()
        res.json(product)    
    } catch (err) {
        res.status(400).json({error: err.message })
    }
}


const decreaseStock = async (req,res) => {
    try {
        const {quantity} = req.body;
        const product = await Product.findById(req.params.id);
        if(!product) return res.status(404).json({error:"Product not found"})

            if (product.stock_quantity < 0) {
            return res.status(400).json({ error: "Insufficient stock" });
            }
        product.stock_quantity -= quantity;
        await product.save()
        res.json(product)    
    } catch (err) {
        res.status(400).json({error: err.message })
    }
}




export default {
    createProduct,updateProduct,deleteProduct,
    increaseStock,decreaseStock,
    getProducts
}