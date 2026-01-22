import Clothings from "./Clothings.jsx";
function Accessories(){
    return(
        <div className='nextSection' id='Accessories'>
                    <div className="womenHeader">
                        <h3>Accessories</h3>
                        <div className='rightSide'>
                            <h5>NEW ARRIVALS</h5>
                            <h5>SPECIALS</h5>
                            <h5>BEST SELLER</h5>
                            <h5>MOST VIEWED</h5>
                            <h5>FEATURED PRODUCTS</h5>
                        </div>
                    </div>
                    <Clothings category= "accessories" />
                    <div className="seeAll">
                        <h4>SEE ALL</h4>
                    </div>
                </div>
    );
}

export default Accessories