import React from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import Header from './Header/header';
import StorePage from './StorePage/storepage';

const App = props => (
  <div>
    <Header storename="Watcharb" />
    <Route path="/store" render={routerprops => <StorePage {...routerprops} productsdata={props.productsdata} />} />
  </div>
);
export default App;
