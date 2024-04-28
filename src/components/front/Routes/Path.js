import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Product from '../products/Product';
import Signup from '../sign/Signup';
import Cart from '../cart/Cart';

import Checkout from '../checkout/Checkout';

const Path = ({ productItems, cartitems, handleAddProduct, handleRemoveProduct ,handlecartclear}) => {
    return (
        <div>
            <Routes>
            <Route path="/checkout" element={<Checkout cartitems={cartitems} clearcart={handlecartclear}/>} />
                <Route path="/home" element={<Product productItems={productItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/cart" element={<Cart cartitems={cartitems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} 
                handlecartclear={handlecartclear} />} />
                <Route path="/" element={<Product productItems={productItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} />} />
            </Routes>
        </div>
    );
};

export default Path;
