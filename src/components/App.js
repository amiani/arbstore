import React from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import Menubar from './Menubar/menubar';

const App = props => (
  <div>
    <Menubar storename="Watcharb" />
    <Link to="/store">Store</Link>
    <Route path="/store" component={() => <p>Testing</p>} />
  </div>
);
export default App;
