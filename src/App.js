import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import React from "react";

// when here we want to render the page this components loads
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  /**
   * our subscription is alwasy listening to the auth and the auth is
   * like im just going to send them that user authentication object
   * everytime until they sign out. this is a really great feature
   * because this is going to be how we can get persistance of our
   * user sessions to set up all this complicated stuff that would
   * normally require for us to get this
   */

  /**
   * this is an open messaging system/ subscription between our app and our firebase app
   * whenever any changes occur on a firebase form any source related to this application
   * firebase sends out that message that says the auth state has changed e.g. signed out,
   * it will give us (user) and they it will call it so we dont have to manually fetch everytime
   * the state has changed. this connection is always open as long as long as our application component
   * is mounted on our dom but because its an open subscription we also have to close subscriptions
   * when this unmounts because we dont want any memory leaks in our javascript application
   */

  unsubscribeFromAuth = null;

  //   componentDidMount() {
  //     this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
  //      if(userAuth){
  //        const userRef = await createUserProfileDocument(userAuth);
  //        userRef.onSnapshop(snapShot => {

  //        })
  //      }
  //    });
  //  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        // if we are signing out
        // if the snapshot has changed
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            }
            // ,() => {
            //   console.log(this.state);
            // }
          ); // second param in setState()
          console.log(this.state) // prints out when new user is added 
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  // if our user signs out then ..
  // this will close the subscription
  // how we handle off changes on firebase
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        {/* exact is a true or false value */}
        <Switch>
          {/* <Route path='/' component={HomePage} />  */}
          {/* <Route path='/hats' component={HatsPage} /> */}
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
