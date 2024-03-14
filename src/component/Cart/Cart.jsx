import Bottle from "../bottle/Bottle";
import './cart.css'
const Cart = ({cart, removeCartHendel}) => {
    return (
        <div>
            <h4>Cart {cart.length}</h4>
            <div className="cart-container">
                {
                    cart.map(Bottle =>  <div className="cart">
                        <img src={Bottle.img}></img>
                        <div><button onClick={()=> removeCartHendel(Bottle.id)}>Remove</button></div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Cart;