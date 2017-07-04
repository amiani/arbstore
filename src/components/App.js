import React from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import Menubar from './Menubar/menubar';
import StorePage from './StorePage/storepage.js';

const App = props => (
  <div>
    <Menubar storename="Watcharb" />
    <Link to="/store">Store</Link>
    <Route path="/store" component={StorePage} />
  </div>
);
export default App;
