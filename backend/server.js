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
    price: {type: Number, required: true},
    category: {type: String, required: true},
    image: {type: String, required: true}
   
});

const Product = mongoose.model('Product', productSchema);

app.get('/api/seed', async (req, res) => {
    try{
        await Product.deleteMany({});

        const womenProducts = [
            { name: "Pink Oversized Sweatshirt", price: 18000, category: "women", image: "https://source.unsplash.com/600x600/?women,sweatshirt" },
            { name: "White Pullover Hoodie", price: 22000, category: "women", image: "https://source.unsplash.com/600x600/?women,hoodie" },
            { name: "Grey Jogger Pants", price: 16000, category: "women", image: "https://source.unsplash.com/600x600/?women,joggers" },
            { name: "Yellow Crop Top", price: 12000, category: "women", image: "https://source.unsplash.com/600x600/?women,crop-top" },
            { name: "Black Bodycon Dress", price: 25000, category: "women", image: "https://source.unsplash.com/600x600/?women,dress" },
            { name: "Floral Summer Dress", price: 23000, category: "women", image: "https://source.unsplash.com/600x600/?women,summer-dress" },
            { name: "High Waist Skinny Jeans", price: 28000, category: "women", image: "https://source.unsplash.com/600x600/?women,jeans" },
            { name: "Women Denim Jacket", price: 32000, category: "women", image: "https://source.unsplash.com/600x600/?women,denim-jacket" },
            { name: "Ribbed Long Sleeve Top", price: 14000, category: "women", image: "https://source.unsplash.com/600x600/?women,long-sleeve-top" },
            { name: "Women Knit Cardigan", price: 24000, category: "women", image: "https://source.unsplash.com/600x600/?women,cardigan" },
            { name: "Pleated Mini Skirt", price: 15000, category: "women", image: "https://source.unsplash.com/600x600/?women,skirt" },
            { name: "Women Lounge Set", price: 27000, category: "women", image: "https://source.unsplash.com/600x600/?women,loungewear" },
            { name: "Cotton Pajama Set", price: 20000, category: "women", image: "https://source.unsplash.com/600x600/?women,pajamas" },
            { name: "Sleeveless Tank Top", price: 9000, category: "women", image: "https://source.unsplash.com/600x600/?women,tank-top" },
            { name: "Women Casual Blazer", price: 38000, category: "women", image: "https://source.unsplash.com/600x600/?women,blazer" },
        ];
        while (womenProducts.length < 50) {
            womenProducts.push({
                name: `Women Fashion Item ${womenProducts.length + 1}`,
                price: 15000 + womenProducts.length * 500,
                category: "women",
                image: "https://source.unsplash.com/600x600/?women,fashion"
            });
        }
        const menProducts = [
            { name: "Black Denim Jacket", price: 35000, category: "men", image: "https://source.unsplash.com/600x600/?men,denim-jacket" },
            { name: "Blue Slim Fit Jeans", price: 28000, category: "men", image: "https://source.unsplash.com/600x600/?men,jeans" },
            { name: "White Cotton T-Shirt", price: 12000, category: "men", image: "https://source.unsplash.com/600x600/?men,tshirt" },
            { name: "Men Pullover Hoodie", price: 24000, category: "men", image: "https://source.unsplash.com/600x600/?men,hoodie" },
            { name: "Grey Jogger Pants", price: 20000, category: "men", image: "https://source.unsplash.com/600x600/?men,joggers" },
            { name: "Men Graphic T-Shirt", price: 15000, category: "men", image: "https://source.unsplash.com/600x600/?men,graphic-tshirt" },
            { name: "Black Leather Jacket", price: 55000, category: "men", image: "https://source.unsplash.com/600x600/?men,leather-jacket" },
            { name: "Men Chino Trousers", price: 26000, category: "men", image: "https://source.unsplash.com/600x600/?men,chinos" },
            { name: "Men Polo Shirt", price: 18000, category: "men", image: "https://source.unsplash.com/600x600/?men,polo-shirt" },
            { name: "Men Long Sleeve Shirt", price: 22000, category: "men", image: "https://source.unsplash.com/600x600/?men,shirt" },
            { name: "Men Suit Jacket", price: 65000, category: "men", image: "https://source.unsplash.com/600x600/?men,suit" },
            { name: "Men Casual Shorts", price: 14000, category: "men", image: "https://source.unsplash.com/600x600/?men,shorts" },
            { name: "Men Track Pants", price: 19000, category: "men", image: "https://source.unsplash.com/600x600/?men,track-pants" },
            { name: "Men Winter Coat", price: 72000, category: "men", image: "https://source.unsplash.com/600x600/?men,coat" },
            { name: "Men Plain Sweatshirt", price: 21000, category: "men", image: "https://source.unsplash.com/600x600/?men,sweatshirt" },
        ];
        while (menProducts.length < 50) {
        menProducts.push({
            name: `Men Fashion Item ${menProducts.length + 1}`,
            price: 18000 + menProducts.length * 700,
            category: "men",
            image: "https://source.unsplash.com/600x600/?men,fashion"
        });
        }

        const accessoryProducts = [
            { name: "Gold Chain Necklace", price: 12000, category: "accessories", image: "https://source.unsplash.com/600x600/?necklace" },
            { name: "Leather Wristwatch", price: 45000, category: "accessories", image: "https://source.unsplash.com/600x600/?watch" },
            { name: "Stud Earrings", price: 8000, category: "accessories", image: "https://source.unsplash.com/600x600/?earrings" },
            { name: "Classic Sunglasses", price: 15000, category: "accessories", image: "https://source.unsplash.com/600x600/?sunglasses" },
            { name: "Leather Belt", price: 10000, category: "accessories", image: "https://source.unsplash.com/600x600/?belt" },
            { name: "Canvas Backpack", price: 32000, category: "accessories", image: "https://source.unsplash.com/600x600/?backpack" },
            { name: "Wool Beanie Hat", price: 9000, category: "accessories", image: "https://source.unsplash.com/600x600/?beanie" },
            { name: "Silk Scarf", price: 14000, category: "accessories", image: "https://source.unsplash.com/600x600/?scarf" },
            { name: "Baseball Cap", price: 11000, category: "accessories", image: "https://source.unsplash.com/600x600/?cap" },
            { name: "Leather Wallet", price: 18000, category: "accessories", image: "https://source.unsplash.com/600x600/?wallet" },
        ];
        while (accessoryProducts.length < 50) {
        accessoryProducts.push({
            name: `Fashion Accessory ${accessoryProducts.length + 1}`,
            price: 8000 + accessoryProducts.length * 600,
            category: "accessories",
            image: "https://source.unsplash.com/600x600/?fashion,accessories"
        });
        }

        const products = [...womenProducts, ...menProducts, ...accessoryProducts];

        // const products = [

        //     { name: "Pink Sweatshirt", price: "$45.00", category: "women", image: "https://picsum.photos/200/300?random=1" },
        //     { name: "White Hoodie", price: "$55.00", category: "women", image: "https://picsum.photos/200/300?random=2" },
        //     { name: "Grey Joggers", price: "$35.00", category: "women", image: "https://picsum.photos/200/300?random=3" },
        //     { name: "Yellow Crop Top", price: "$25.00", category: "women", image: "https://picsum.photos/200/300?random=4" },

        //     { name: "Black Jacket", price: "$85.00", category: "men", image: "https://picsum.photos/200/300?random=5" },
        //     { name: "Blue Jeans", price: "$60.00", category: "men", image: "https://picsum.photos/200/300?random=6" },
        //     { name: "Graphic T-Shirt", price: "$30.00", category: "men", image: "https://picsum.photos/200/300?random=7" },
        //     { name: "Beige Trench", price: "$120.00", category: "men", image: "https://picsum.photos/200/300?random=8" },

        //     { name: "Gold Necklace", price: "$30.00", category: "accessories", image: "https://picsum.photos/200/300?random=9" },
        //     { name: "Blue WristWatch", price: "$65.00", category: "accessories", image: "https://picsum.photos/200/300?random=10" },
        //     { name: "Sapphire Earrings", price: "$35.00", category: "accessories", image: "https://picsum.photos/200/300?random=11" },
        //     { name: "Beige HandChain", price: "$20.00", category: "accessories", image: "https://picsum.photos/200/300?random=12" },
        // ];

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