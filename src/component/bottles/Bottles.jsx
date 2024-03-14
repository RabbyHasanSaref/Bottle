import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../bottle/Bottle";
import './Bottles.css'
import { addToLocalStorage, getStoreCart, removeCart } from "../../utilite/storage";
import Cart from "../Cart/Cart";

const Bottles = () => {
const [bottles, setBottles] = useState([])

const [carts, setCart] = useState([])

useEffect(()=>{
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/memorable-water-bottle/main/public/bottles.json')
    .then(res=>res.json())
    .then(data=>{
        setBottles(data)
        // console.log(data)
    })
},[])

// local storage data load 
useEffect(()=>{
    // console.log('Hello', bottles.length);
    if(bottles.length > 0){
        const storagCart = getStoreCart();
        // console.log(storagCart, bottles);

        const  saveCart = [];
        for(const id of storagCart){
            // console.log(id)
            const bottle = bottles.find(bottle => bottle.id === id)
            saveCart.push(bottle);
        }
        setCart(saveCart);
        // console.log(saveCart);
    }
},[bottles])

const buyNowHandelBtn = (bottle) => {
    const newCart = [...carts, bottle];
    setCart(newCart);

    // local storage data save 
    addToLocalStorage(bottle.id);
}

const removeCartHendel = id => {

    const reamaining = carts.filter(bottle => bottle.id !== id);
    setCart(reamaining);

    removeCart(id);
}

    return (
        <div>
            <h2>Bottle Available {bottles.length}</h2>
            <Cart cart={carts} removeCartHendel={removeCartHendel}></Cart>
           <div className="bottles-container">
            {
                bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} buyNowHandelBtn={buyNowHandelBtn}></Bottle>)
            }
           </div>
        </div>
    );
};

export default Bottles;