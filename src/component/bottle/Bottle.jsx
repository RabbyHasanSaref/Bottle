import './Bottle.css'
const Bottle = ({bottle, buyNowHandelBtn}) => {
    const {img, name, price, ratings, ratingsCount, seller, stock} = bottle;
    // console.log(bottle)
    return (
        <div className="bottle">
            <img src={img} alt="product" />
            <h4>Product Name: {name}</h4>
            <h4>Price: {price}</h4>
            <h4>Rating: {ratings}</h4>
            <h4>Ratings Count: {ratingsCount}</h4>
            <h4>Seller Name: {seller}</h4>
            <h4>Stock Product: {stock}</h4>
            <button onClick={()=>buyNowHandelBtn(bottle)} className='btn'>Buy Now</button>
        </div>
    );
};

export default Bottle;