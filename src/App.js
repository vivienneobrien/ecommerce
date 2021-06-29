import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import ShopPage from './pages/shop/shop.component'
import Header from "./components/header/header.component"


// when here we want to render the page this components loads
function App() {
  return (
    <div>
    <Header />
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
