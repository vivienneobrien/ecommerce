import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";

const HatsPage = () => {
 <div>
    <h1>hats page</h1>
  </div>
  
};
// when here we want to render the page this components loads
function App() {
  return (
    <div>
      <Switch>
        <Route path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
