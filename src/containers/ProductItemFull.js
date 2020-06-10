import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getSingleProduct } from '../actions/index';
import ErrorInfo from '../components/ErrorInfo';

const mapStateToProps = state => {
  return {
    product: state.singleProduct.product,
    isError: state.singleProduct.isError,
   };
};

class ProductItemFull extends Component {

  componentDidMount() {
    const { getSingleProduct } = this.props;
    let id = this.props.match.params.id
    getSingleProduct(id);
  }

  render() {
    const { product, isError } = this.props;

    if(isError) {
      return <ErrorInfo />
    }
    
    const pairing = product.food_pairing  &&
      (
        <ul className='product-pairing'>
          {product.food_pairing.map( (f, i) => <li className='product-pairing-item' key={i}>{f}</li>)}
        </ul>
      )

    return (
      <div className='product-item-full'>
        <img className='product-img-full' src={product.image_url} alt={`${product.name}'s bottle`}/>
        <div className="product-details">
          <h1 className='product-name'>{product.name}</h1>
          <p className='product-tagline'>{product.tagline}</p>
          <p className='product-description'>{product.description}</p>
          <p className='product-tips'>{product.brewers_tips}</p>
          <h3 className='product-pairing-head'>Pairing food:</h3>
          <ul>
            {pairing}
          </ul>
          <small className='product-contributed'>Contributed by: {product.contributed_by}</small>
        </div>
      </div>
    )
  }
}

const ProductItem = connect(mapStateToProps, { getSingleProduct })(ProductItemFull);

ProductItemFull.propTypes = {
  product: PropTypes.object.isRequired,
  isError: PropTypes.bool.isRequired,
  getSingleProduct: PropTypes.func.isRequired
};

export default ProductItem
