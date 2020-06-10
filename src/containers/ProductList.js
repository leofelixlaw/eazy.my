import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProductItem from '../components/ProductItem';
import { getProducts } from '../actions/index';

const mapStateToProps = state => {
  return {
    productList: state.products.products,
    isError: state.products.isError
   };
};

class ProductList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1
    }
  }
  componentDidMount() {
    const { getProducts } = this.props;
    getProducts();
  }


  render() {
    const { productList, isError } = this.props;

    return (
      <div className="card-product">
        <h4 className="text-uppercase mb-4">Listing</h4>
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6">
          {productList.map( (product, i) => (
            <ProductItem product={product}  key={i}/>
          ))} 
        </div>

        {isError &&
          <button className='btn-more' onClick={this.loadMore}>Ooops! Try again</button>
        }
      </div>
      
    )
  }
}

const Products = connect(mapStateToProps, { getProducts })(ProductList);

ProductList.propTypes = {
  productList: PropTypes.array.isRequired,
  isError: PropTypes.bool.isRequired,
  getProducts: PropTypes.func.isRequired
};

export default Products
