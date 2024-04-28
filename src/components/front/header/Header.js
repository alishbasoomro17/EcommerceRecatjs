import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signedInName, signedInEmail, signedInLocation } from '../sign/Signup';
import "./Header.css"


const Header = ({ cartitems }) => {
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleCartClick = () => {
    if (signedInName && signedInEmail && signedInLocation) {
      // Proceed to cart
      navigate('/cart');
    } else {
      // If user is not signed in, show Bootstrap alert
      setShowAlert(true);
    }
  };

  const handleSignIn = () => {
    // Your sign-in logic here
    // For example, after successful sign-in:
    setShowAlert(false); // Reset the alert
  };

  return (
    <center>
 

  
      <header className='container row '>
        <div className='col-5'>
          <h2 className='display-6'>
            <Link to="/" className='logo'></Link>
            AlISHBA BAKERY
          </h2>
        </div>
        <div className='col tagname'>
          pick your sweettooth
        </div>
        <div className='header-links col'>
          <div className='row'>
            <ul className='col' typeof=''>
              <li>
                <Link to="/home">Shop</Link>
              </li>
            </ul>

            <ul className='col'>
              <li>
                <Link to="/signup" onClick={handleSignIn}>Signup</Link>
              </li>
            </ul>

            <ul className='col'>
              <li>
                <button type="button" className="btn btn-primary position-relative cart-btn" onClick={handleCartClick}>
                  <i className='fa fa-cart-plus'></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartitems.length}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {showAlert && (
        <div className="alert alert-danger" role="alert">
          Please sign in first to view your cart.
        </div>
      )}
   
    </center>
 
  );
}

export default Header;
