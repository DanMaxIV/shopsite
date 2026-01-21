import React, { useState, useEffect } from "react";

function Hero({ category }) {
    const [exploreItem, setExploreItem] = useState(null);
    const [menItem, setMenItem] = useState(null);
    const [womenItem, setWomenItem] = useState(null);
    const [fade, setFade] = useState(true);

    const fetchItems = async () => {
        setFade(false);

        try {
            const [allRes, menRes, womenRes] = await Promise.all([
                fetch(`http://localhost:5000/api/products`),
                fetch(`http://localhost:5000/api/products?category=men`),
                fetch(`http://localhost:5000/api/products?category=women`)
            ]);
            const allData = await allRes.json();
            const menData = await menRes.json();
            const womenData = await womenRes.json();

            //Random items
            if (allData.length > 0) {
                setExploreItem(allData[Math.floor(Math.random() * allData.length)]);
            }
            if (menData.length > 0) {
                setMenItem(menData[Math.floor(Math.random() * menData.length)]);
            }
            if (womenData.length > 0) {
                setWomenItem(womenData[Math.floor(Math.random() * womenData.length)]);
            }

            setTimeout(() => setFade(true), 500)
        } catch (err) {
            console.error("Error Fetching hero section:", err);
        }
    };


    useEffect(() => {
        fetchItems();
        const interval = setInterval(fetchItems, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="hero">
            <div className="hero-right">
                <div className="grid-container">
                    <div className="hero-card explore" >
                        <div className={`Explore ${fade ? 'fade-in' : 'fade-out'} `}>
                            {exploreItem && (
                                <>
                                    <img src={exploreItem.image} alt={exploreItem.name} />
                                    <div className="hero-text">
                                        <h2>Explore</h2>
                                        <p>{exploreItem.name}</p>
                                    </div>
                                </>
                            )
                            }
                        </div>
                    </div>
                    <div className="hero-card">
                        <div className={`women ${fade ? 'fade-in' : 'fade-out'}`}>
                            {womenItem && (
                                <>
                                    <img src={womenItem.image} alt={womenItem.name} />
                                    <div className="hero-text" >
                                        <h2>Women's Collection</h2>
                                        <p>{womenItem.name}</p>
                                    </div>
                                </>
                            )
                            }
                        </div>
                    </div>
                    <div className="hero-card">
                        <div className={`men ${fade ? 'fade-in' : 'fade-out'}`}>
                            {menItem && (
                                <>
                                    <img src={menItem.image} alt={menItem.name} />
                                    <div className="hero-text" >
                                        <h2>Men's Collection</h2>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="hero-card ornament">
                        <div className="accessorie">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero