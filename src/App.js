import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchProducts from './store/actions/fetchProducts';
import Header from './components/Header'
class App extends Component {
  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    return (
      <div className="App">

        <br />
        {this.props.products.length === 0 ?
          <p>THERE ARE NO USERS</p> :
          this.props.products.map(product => 
          <p key={product.id}>{product.attributes.title} {product.attributes.links.image}</p>
          )}
        <br />
      </div>
    )
  }
}

//Make State accessible to movies and users in App.
const MapStateToProps = (state) => {
  return {
    products: state.products
  };
};

// Setup Dispatch for our button events. 
const MapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts)
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(App)