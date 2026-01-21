import React, {useState, useEffect} from "react";
function Clothings({category}) {
    const [products,  setProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/api/products?category=${category}`)
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error("Error fetching data:", err));
    }, [category]);
    return(
        <div className="clothingsGrid">
            {products.map((product, index) => (
                <div key={product._id || index} className={`item${index + 1} card cards`}>
                    <div className="productImageContainer">
                        <img src={product.image} alt={product.name} />
                    </div>
                    <div className="namePrice">
                        <h5 id="clotheName">{product.name}</h5>
                        <div>
                            <h5 id="price">{product.price}</h5>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Clothings