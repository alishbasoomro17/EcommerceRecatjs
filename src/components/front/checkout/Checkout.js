import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./checkout.css"
import { signedInName, signedInEmail, signedInLocation } from '../sign/Signup';


const Checkout = ({ cartitems ,clearcart}) => {
    const totalprice = cartitems.reduce((price, item) => price + item.quantity * item.price, 0);
    const [paymentMethod, setPaymentMethod] = useState('card');

    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    return (
    
        <div className='container-sm'>
              <center>
              <h2>Checkout</h2>
              <h2>Order Summmary</h2>r
              </center>
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total Price</th>
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
                        </tr>
                    ))}
                    <tr>
                        <td colSpan="4" className="text-end"><strong>Total Price:</strong></td>
                        <td><strong>${totalprice}</strong></td>
                    </tr>
                </tbody>
            </table>
            <div className="row justify-content-center">
                <div className="col-6">
                    <div className="form-check bg-white p-3">
                        <input className="form-check-input" type="radio" name="paymentMethod" id="cardPayment" value="card" checked={paymentMethod === 'card'} onChange={handlePaymentMethodChange} />
                        <label className="form-check-label" htmlFor="cardPayment">
                            <h4><i className="fa fa-credit-card mr-2"></i>Pay By Card</h4>
                        </label>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-check bg-white p-3">
                        <input className="form-check-input" type="radio" name="paymentMethod" id="codPayment" value="cod" checked={paymentMethod === 'cod'} onChange={handlePaymentMethodChange} />
                        <label className="form-check-label" htmlFor="codPayment">
                            <h4><i className="fa fa-truck mr-2"></i>Cash on Delivery</h4>
                        </label>
                    </div>
                </div>
            </div>
            {paymentMethod === 'card' && (
                <div className="container">
                    <div className="p-3">
                        <h2 className="text-center">Payment Information</h2>
                        <input type="text" className="form-control mb-3" placeholder="Card Number" />
                        <input type="text" className="form-control mb-3" placeholder="Expiry Date" />
                        <input type="text" className="form-control mb-3" placeholder="CVV" />
                        <table className="table table-bordered table-dark table-hover">
                            <tbody>
                                <tr>
                                    <td>Customer Name:</td>
                                    <td>{signedInName}</td>
                                </tr>
                                <tr>
                                    <td>Username:</td>
                                    <td>{signedInEmail}</td>
                                </tr>
                                <tr>
                                    <td>Amount To Be Deducted:</td>
                                    <td>Rs {totalprice}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
            {paymentMethod === 'cod' && (
                <div className="container">
                    <div className="p-3">
                        <h2 className="text-center">Cash on Delivery</h2>
                        <table className="table table-bordered table-dark table-hover">
                            <tbody>
                                <tr>
                                    <td>Customer Name:</td>
                                    <td>{signedInName}</td>
                                </tr>
                                <tr>
                                    <td>Username:</td>
                                    <td>{signedInEmail}</td>
                                </tr>
                                <tr>
                                    <td>Location</td>
                                    <td>{signedInLocation}</td>
                                </tr>
                                <tr>
                                    <td>Additional Info</td>
                                    <td><input type="text" className="form-control" placeholder='Additional Info..' /></td>
                                </tr>
                                <tr>
                                    <td>Amount To be Given :</td>
                                    <td>Rs {totalprice}</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>Please have the exact amount ready for payment.</p>
                    </div>
                </div>
            )}
          

          
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
 PLace Order
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel"></h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       <h1>YOUR ORDER HAS BEEN PLACED <i className='fa fa-check'></i></h1>
      </div>
      <div class="modal-footer">
        <Link to="/home"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={clearcart}>Close</button></Link>
       
      </div>
    </div>
  </div>
</div>




<Link to="/cart"><button type="button" class="btn btn-secondary">Back To Cart</button></Link>
        </div>
     
    );
};

export default Checkout;
