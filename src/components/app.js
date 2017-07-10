import React from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import Header from './Header/header';
import StorePage from './StorePage/storepage';

const App = props => (
  <div>
    <Header storename="Watcharb" />
    {/*maybe router is not appropriate for this??*/}
    {/*props undefined below*/}
    <Route path="/store" render={routerprops => <StorePage {...routerprops} products={props.products} />} />
  </div>
);
export default App;
