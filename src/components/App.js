import React from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import Header from './Header/header';
import StorePage from './StorePage/storepage';

const App = props => (
  <div>
    <Header storename="Watcharb" />
    <Link to="/store">Store</Link>
    <Route path="/store" component={StorePage} />
  </div>
);
export default App;
