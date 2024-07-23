import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Signup.css"
import { Link } from 'react-router-dom';
import GIF from "../../back/gifbakery.gif"

let signedInName = '';
let signedInEmail = '';
let signedInLocation = '';

const countries = ["Pakistan"];
const cities = {
  "Pakistan": ['Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad']
};

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('Pakistan');
  const [city, setCity] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();

    if (!name || !email || !city) {
      setShowAlert(true);
      return;
    }

    signedInName = name;
    signedInEmail = email;
    signedInLocation = `${city}, ${country}`;
    setLoggedIn(true);
    setShowAlert(false);
  };

  const handleContinueShopping = () => {
    setLoggedIn(false);
   
  };

  return (
    <div className='container-fluid align-item-center' style={{ backgroundImage: `url(${GIF})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
    <center>  <div className='container box'>
        <div className="row justify-content-center ">
          <div className="col-md-6">
            {showAlert && (
              <div className="alert alert-danger" role="alert">
                Please fill in all required fields.
              </div>
            )}
            {loggedIn ? (
              <div className="text-center pop">
                <h2> 🎉 🎉 Welcome {name} 🎉🎉</h2>
                <h2> Party poppers! You have successfully signed in.</h2>
                <Link to="/home"><button type="button" className="btn btn-secondary mt-3" onClick={handleContinueShopping}>Continue Shopping</button></Link>
              </div>
            ) : (
              <form className="row g-3" onSubmit={handleSignIn}>
                <h3 className='text-center'>SIGN IN <i className='fa fa-user-circle-o'></i> </h3>
                <div className="col-md-6">
                  <label htmlFor="inputName" className="form-label">Name</label>
                  <input type="text" className="form-control" id="inputName" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputEmail" className="form-label">Email</label>
                  <input type="email" className="form-control" id="inputEmail" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputCountry" className="form-label">Country</label>
                  <select className="form-select" id="inputCountry" value={country} onChange={(e) => setCountry(e.target.value)}>
                    {countries.map((country) => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputCity" className="form-label">City</label>
                  <select className="form-select" id="inputCity" value={city} onChange={(e) => setCity(e.target.value)}>
                    <option value="">Select City</option>
                    {cities[country].map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary">Sign In</button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
      </center>
    </div>
  );
};

export { signedInName, signedInEmail, signedInLocation };
export default Signup;
