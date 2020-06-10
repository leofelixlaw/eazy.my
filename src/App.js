import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Store from './Store';
import Header from './components/Header'
import ProductList from './containers/ProductList';
import ProductItemFull from './containers/ProductItemFull';
 
const App = () => (
  <Provider store={Store}>
    <Router>
      <Header />
      <main role="main">
        <section>
          <div className="container main-content">
            <Switch>
              <Route exact path="/" component={ProductList} />
              <Route path="/:id" component={ProductItemFull} />
            </Switch>
          </div>
        </section>
      </main>
    </Router>
  </Provider>
)
 
export default App
