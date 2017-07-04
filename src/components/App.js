import { Route } from 'react-router';
import { Link } from 'react-router-dom';

const App = props => (
  <div>
    <Link to="/store">Store</Link>
    <Route path="/store" component={() => <p>Testing</p>} />
  </div>
);
export default App;
