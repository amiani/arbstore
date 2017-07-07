import React from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import Header from './Header/header';
import StorePage from './StorePage/storepage';

const App = props => (
  <div>
    <Header storename="Watcharb" />
    <Link to="/store">Store</Link>
    ///maybe router is not appropriate for this??
    <Route path="/store" component={StorePage} products={props.products} />
  </div>
);
export default App;
