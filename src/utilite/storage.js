const getStoreCart = () => {
    const getStoreCartString = localStorage.getItem('cart');
    if(getStoreCartString){
        return JSON.parse(getStoreCartString);
    }
    return [];
} 

const saveLocalStorage = cart => {
    const cartStringfy = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringfy);
}

const addToLocalStorage = id => {
    const cart = getStoreCart();
    cart.push(id);

    // save data local storage 
    saveLocalStorage(cart);
}

const removeCart = id => {
    const cart = getStoreCart();

    const ramaining = cart.filter(idx => idx !== id);

    saveLocalStorage(ramaining);
}

export {addToLocalStorage, getStoreCart, removeCart}