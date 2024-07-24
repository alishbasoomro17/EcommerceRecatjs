import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Product.css';
import data from '../../back/data/data.js';
import GIF from "../../back/gifbakery.gif";
import gifs from '../../back/data/gif.js';

const Product = ({ handleAddProduct }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (productItem) => {
    setSelectedProduct(productItem);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className='container-fluid' style={{ backgroundImage: `url(${GIF})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <div className='products'>
        {data.productItems.map((productItem, index) => (
          <div className='card' key={productItem.id}>
            <div>
          
              <img  src={gifs[index % gifs.length]} alt={productItem.name} className="product-image img-fluid" />
            </div>
            <div>
              <h5 className='product-name'>
                {productItem.name}
              </h5>
            </div>
            <div className='product-price'>
              Rs:{productItem.price}
            </div>
            <div>
              <button className='product-add-btn' onClick={() => handleAddProduct(productItem)}>Add to Cart</button>
            </div>
            <button type="button" className="btn btn-dark" onClick={() => openModal(productItem)} id='viewbtn'>
              <h6>View Details</h6>
            </button>
          </div>
        ))}
        
        {selectedProduct && (
          <Modal show={!!selectedProduct} onHide={closeModal}>
            <Modal.Header closeButton>
              <Modal.Title style={{ fontFamily: "Dancing Script" }}>{selectedProduct.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="row">
                <div className="col">
             
                  <img src={gifs[data.productItems.findIndex(item => item.id === selectedProduct.id) % gifs.length]} alt={selectedProduct.name} className="product-modal-image img-fluid" />
                </div>
                <div className="col">
                  <p>{selectedProduct.description}</p>
                  <div>
                    <h6>Reviews:  <p style={{color:"gold",fontSize:'34px'}}>★★★☆☆</p></h6>
                    {selectedProduct.reviews.map((review, index) => (
                      <div key={index} className="review">
                        <strong>{review.name}:</strong> {review.comment}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="dark" onClick={closeModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Product;
