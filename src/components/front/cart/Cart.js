import React from 'react';
import "./Cart.css"

import { Link } from 'react-router-dom';

const Cart = ({ cartitems, handleAddProduct, handleRemoveProduct, handleClearCart }) => {
    const totalprice = cartitems.reduce((price, item) => price + item.quantity * item.price, 0);

    return (
      
            <div className="cart-items container-sm">
                <h2 className="cart-items-header text-center">Cart Items</h2>
                <div>
                   {cartitems.length >= 1 && (<center><button className="btn btn-danger m-5" onClick={handleClearCart}>Clear Cart</button></center>)}
                    
                </div> 
                {cartitems.length === 0 && ( <div className='cart-empty text-center' style={{color:"white"}}>Your cart is empty</div>)}

                {cartitems.length > 0 && (
                    <table className="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Total Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartitems.map((item) => (
                                <tr key={item.id}>
                                    <td><img src={item.img} alt="" style={{ width: '50px' }} /></td>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>${item.price}</td>
                                    <td>${item.quantity * item.price}</td>
                                    <td>
                                        <button className="btn btn-outline-danger in" onClick={() => handleAddProduct(item)}>+</button>
                                        <button className="btn btn-outline-danger in" onClick={() => handleRemoveProduct(item)}>-</button>
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan="4" className="text-end"><strong><center>Total Price:${totalprice}</center></strong></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    
                )}
               <Link to="/checkout"><button className='btn btn-danger' >Checkout</button></Link>
            </div>
       
    );
};

export default Cart;
