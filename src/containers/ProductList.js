import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProductListComponent from '../components/ProductList.component';
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
    document.body.classList.add("bg-color");
  }

  componentWillUnmount() {
    document.body.classList.remove("bg-color");
  }


  // Dummy loader element
  renderDummy() {
    return (
      [...Array(30).keys()].map((item, key) =>
      <div key={key} className="loading"></div>)
    );
  }

  // Render product Lists
  render() {
    const { productList, isError } = this.props;
    return (
      <div className="card-product">
        <h4 className="text-uppercase mb-4 ml-3">Listing</h4>
        <div className="card-product-container">
          {
            productList.length === 0 ?  this.renderDummy() : productList.map( (product, i) => (
              <ProductListComponent product={product} key={i}/>
            ))
          }
        </div>

        {isError &&
          <div class="alert alert-danger" role="alert">
            Something went wrong
          </div>
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
