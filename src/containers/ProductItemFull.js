import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getSingleProduct } from '../actions/index';
import ProductItemFullComponent from '../components/ProductItemFullProductList.component';
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

  renderDummy() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-6 col-md-8">
              <div className="loading loading-title"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-8">
              <div className="loading loading-details"></div>
          </div>
          <div className="col-sm-6 col-md-4">
              <div className="loading loading-details"></div>
          </div>
        </div>
      </div>
    );
  }
  
  renderProduct(item) {
    if(Object.keys(item).length !== 0){
      return (
        <ProductItemFullComponent product={item}/>
        // this.renderDummy()
      )
    }
  }

  render() {
    const { product, isError } = this.props;
    if(isError) {
      return <ErrorInfo />
    }
    return (
      <div className='product-item-full'>
        <div className="product-details">
         {this.renderProduct(product)}
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
