import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {

  return (
    <div className="col mb-4 card-product">
      <Link className="card h-100" to={`/${product.id}`}>
        <div className="card-img-wrap">
        {/* {
          product.image_url ? 
          <img className="card-img-top" src={require(`../assets/images/products/9.png`)} alt={product.attributes.title}/> :
          <img className="card-img-top" src="https://via.placeholder.com/339x201?text=eazy.my" alt="placeholder"/>
        } */}
        <img className="card-img-top" src={require(`../assets/images/products/${product.id}.png`)} alt={product.attributes.title}/>
        </div>
        <div className="card-body">
          <p className="card-text text-truncate text-truncate-2lines mb-3">{product.attributes.title}</p>
          <h5 className="price mb-0">{product.attributes.price}</h5>
        </div>
      </Link>
    </div>
   )
}

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductItem;
