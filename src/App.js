import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ProductPage from './ProductPage';
import './App.css';

const App = () => (
  <Router>
    <Switch>
      <Route path="/:id">
        <ProductPage />
      </Route>
    </Switch>
  </Router>
);

export default App;
