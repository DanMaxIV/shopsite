const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

//Local connection

const dbURI = process.env.MONGO_URI;

mongoose.connect(dbURI)
    .then(() => console.log("Connected to Mongo Atlass!"))
    .catch(error => console.error("Cloud connection failed:", error));

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: String, required: true},
    category: {type: String, required: true},
    image: {type: String, required: true}
   
});

const Product = mongoose.model('Product', productSchema);

app.get('/api/seed', async (req, res) => {
    try{
        await Product.deleteMany({});

        const products = [

            { name: "Pink Sweatshirt", price: "$45.00", category: "women", image: "https://picsum.photos/200/300?random=1" },
            { name: "White Hoodie", price: "$55.00", category: "women", image: "https://picsum.photos/200/300?random=2" },
            { name: "Grey Joggers", price: "$35.00", category: "women", image: "https://picsum.photos/200/300?random=3" },
            { name: "Yellow Crop Top", price: "$25.00", category: "women", image: "https://picsum.photos/200/300?random=4" },

            { name: "Black Jacket", price: "$85.00", category: "men", image: "https://picsum.photos/200/300?random=5" },
            { name: "Blue Jeans", price: "$60.00", category: "men", image: "https://picsum.photos/200/300?random=6" },
            { name: "Graphic T-Shirt", price: "$30.00", category: "men", image: "https://picsum.photos/200/300?random=7" },
            { name: "Beige Trench", price: "$120.00", category: "men", image: "https://picsum.photos/200/300?random=8" },

            { name: "Gold Necklace", price: "$30.00", category: "accessories", image: "https://picsum.photos/200/300?random=9" },
            { name: "Blue WristWatch", price: "$65.00", category: "accessories", image: "https://picsum.photos/200/300?random=10" },
            { name: "Sapphire Earrings", price: "$35.00", category: "accessories", image: "https://picsum.photos/200/300?random=11" },
            { name: "Beige HandChain", price: "$20.00", category: "accessories", image: "https://picsum.photos/200/300?random=12" },
        ];

        const createdProducts = await Product.insertMany(products);
        res.send({message: "Database seeded!", data: createdProducts});
    }catch (error) {
        res.status(500).send({message: "Error seeding database", error});
    }
});

app.get('/api/products', async (req, res) => {
    try{
        const {category} = req.query;
        const filter = category ? {category} :{};
        const products = await Product.find(filter);
        res.json(products);
    } catch (err) {
        console.error(err);
        res.status(500).json({message: "Server error", error: err.message})
    }
    
});

app.listen(5000, () => console.log("Backend Server runnning on port 5000"));