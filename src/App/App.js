import React from 'react';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Home from '../components/pages/Home/Home';
import MyNav from '../components/MyNav/MyNav';
import Auth from '../components/pages/Auth/Auth';
import authMethods from '../helpers/authMethods/authMethods';
import firebase from 'firebase/app';
import 'firebase/auth';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (
    !authed ? <Component {...props}/> : <Redirect to={{ pathname: '/home', state: { from: props.location } }}/>
  );
  return <Route {... rest} render={props => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (
    authed ? <Component {...props}/> : <Redirect to={{ pathname: '/auth', state: { from: props.location } }}/>
  );
  return <Route {... rest} render={props => routeChecker(props)} />;
};

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    if (!firebase.apps.length) {
      authMethods.initFirebase();
    }
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <React.Fragment>
          <MyNav authed={this.state.authed}/>
          <div className='container'>
            <Switch>
              <PublicRoute path='/auth' component={Auth} authed={this.state.authed}/>
              <PrivateRoute path='/home' component={Home} authed={this.state.authed}/>
              <PrivateRoute path='/' exact component={Home} authed={this.state.authed} />
            </Switch>
          </div>
        </React.Fragment>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
