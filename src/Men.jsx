import Clothings from "./Clothings.jsx";
function Men(){
    return(
        <div className='nextSection' id='men'>
                    <div className="womenHeader">
                        <h3>MEN'S</h3>
                        <div className='rightSide'>
                            <h5>NEW ARRIVALS</h5>
                            <h5>SPECIALS</h5>
                            <h5>BEST SELLER</h5>
                            <h5>MOST VIEWED</h5>
                            <h5>FEATURED PRODUCTS</h5>
                        </div>
                    </div>
                    <Clothings />
                    <div className="seeAll">
                        <h4>SEE ALL</h4>
                    </div>
                </div>
    );
}

export default Men