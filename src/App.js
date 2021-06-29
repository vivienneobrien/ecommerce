import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import ShopPage from './pages/shop/shop.component'

const HatsPage = () => {
  return (
    <div >
      <h1> Hi </h1>
    </div>
  );
};

// when here we want to render the page this components loads
function App() {
  return (
    <div>
    {/* exact is a true or false value */}
      <Switch>
        {/* <Route path='/' component={HomePage} />  */}
        {/* <Route path='/hats' component={HatsPage} /> */}
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
