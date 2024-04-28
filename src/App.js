// App.js
import React, { useState } from 'react';
import Header from './components/front/header/Header';
import data from './components/back/data/data';
import { BrowserRouter as Router } from 'react-router-dom';
import Path from './components/front/Routes/Path';
import GIF from "../src/components/back/gifbakery.gif"
const App = () => {
    const { productItems } = data;
    const [cartitems, setCartitems] = useState([]);

    function handleAddProduct(product) {
        const productExist = cartitems.find((item) => item.id === product.id);
        if (productExist) {
            setCartitems(cartitems.map((item) => item.id === product.id ? {
                ...productExist,
                quantity: productExist.quantity + 1
            } : item));
        } else {
            setCartitems([...cartitems, { ...product, quantity: 1 }]);
        }
    }
    const handleRemoveProduct = (product) => {
        const productExist = cartitems.find((item) => item.id === product.id);
        if (productExist.quantity === 1) {
            setCartitems(cartitems.filter((item) => item.id !== product.id));
        } else {
            setCartitems(cartitems.map((item) => item.id === product.id ? { ...productExist, quantity: productExist.quantity - 1 } : item));
        }
    }
    const handlecartclear=()=>{
     setCartitems([]);
    }
    
    return (
        <div style={{ backgroundImage: `url(${GIF})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
     
            <Router>
                <Header cartitems={cartitems}/>
                <Path productItems={productItems} cartitems={cartitems} handleAddProduct={handleAddProduct}
                handleRemoveProduct={handleRemoveProduct}  handlecartclear={handlecartclear}/>
            </Router>
        </div>
    );
};

export default App;
