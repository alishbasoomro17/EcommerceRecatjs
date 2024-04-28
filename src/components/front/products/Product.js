import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Product.css';
import data from '../../back/data/data';
import GIF from "../../back/gifbakery.gif"

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
      {data.productItems.map((productItem) => (
        <div className='card' key={productItem.id}>
          <div>
            <img src={productItem.img} alt="" className='product-image' />
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
          <button type="button" className="btn btn-dark" onClick={() => openModal(productItem)} id='viewbtn'>View details</button>
        </div>
      ))}
      
      {selectedProduct && (
        <Modal show={!!selectedProduct} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title style={{  fontFamily: "Dancing Script"}}>{selectedProduct.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body >
          <div className="row">
            <div className="col">  <img src={selectedProduct.img} alt="" /></div>
            <div className="col">
            {selectedProduct.description && <p>{selectedProduct.description}</p>}
            {selectedProduct.reviews && (
              <div>
                <h2 style={{  fontFamily: "Dancing Script",color:"black"}}> Reviews: <i className='fa fa-star ' style={{color:"goldenrod"}}></i> </h2>
                <ul>
                  {selectedProduct.reviews.map((review, index) => (
                    <li key={index}>
                      <strong>{review.name}:</strong> {review.comment}
                    </li>
                  ))}
                </ul>
                <h4><i>Price:{selectedProduct.price}</i></h4>
              </div>
            )}
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
