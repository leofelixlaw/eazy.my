import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const ProductItemFullComponent = ({ product }) => {

  return (
    <div className="product-details">
      <div className="row">
        <div className="col-sm-6 col-md-8">
          <h5 className="mb-3">{product.attributes.title}</h5>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-md-8">
          <div className="card product-details-image">
            <div className="card-body">
                <img className="img-fluid" src={require(`../assets/images/products/${product.id}.png`)} alt={product.attributes.title}/>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 product-details-content">
          <div className="card">
            <div className="card-header d-flex justify-content-around">
              <Link to={`#`}><img src={require(`../assets/images/icons/heart.svg`)} alt=''/> Wishlist</Link>
              <Link to={`#`}><img src={require(`../assets/images/icons/share.svg`)} alt=''/> Share</Link>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>Price</label>
                <p>{product.attributes.price}</p>
              </div>
              <div className="form-group">
                <label>Item condition</label>
                <p>{product.attributes.price}</p>
              </div>
              <div className="form-group">
                <label>Item location</label>
                <p>{product.attributes.location}</p>
              </div>
              <div className="form-group mb-0">
                <label>Seller info</label>
                <div className="media">
                  <img src={require(`../assets/images/icons/user.svg`)} className="mr-2" alt='' />
                  <div className="media-body">
                    <p className="mb-1">{product.attributes.seller_name}</p>
                    <label className="mb-0">{product.attributes.seller_type}</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <p className="font12">Interested with the ad? Contact the seller</p>
              <div className="contact-action">
                <button type="button" className="btn btn-outline-primary btn-block">
                  <img src={require(`../assets/images/icons/call.svg`)} className="mr-2" alt='' />
                  {product.attributes.phone}
                </button>
                <button type="button" className="btn btn-outline-primary btn-block">
                  <img src={require(`../assets/images/icons/email.svg`)} className="mr-2" alt='' />
                  Email
                </button>
                <button type="button" className="btn btn-primary btn-block">
                  <img src={require(`../assets/images/icons/chat.svg`)} className="mr-2" alt='' />
                  Chat
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
   )
}

ProductItemFullComponent.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductItemFullComponent;
