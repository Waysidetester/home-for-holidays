import React from 'react';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import firebase from 'firebase/app';
import Home from '../components/pages/Home/Home';
import MyNav from '../components/MyNav/MyNav';
import Auth from '../components/pages/Auth/Auth';
import Friends from '../components/pages/Friends/Friends';
import Holidays from '../components/pages/Holidays/Holidays';
import NewFriend from '../components/pages/NewFriend/NewFriend';
import NewHoliday from '../components/pages/NewHoliday/NewHoliday';
import EditFriend from '../components/pages/EditFriend/EditFriend';
import authMethods from '../helpers/authMethods/authMethods';
import 'firebase/auth';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (
    !authed ? <Component {...props}/> : <Redirect to={{ pathname: '/home', state: { from: props.location } }}/>
  );
  return <Route {...rest} render={props => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (
    authed ? <Component {...props}/> : <Redirect to={{ pathname: '/auth', state: { from: props.location } }}/>
  );
  return <Route {...rest} render={props => routeChecker(props)} />;
};

class App extends React.Component {
  state = {
    authed: false,
    pendingUser: true,
  }

  componentDidMount() {
    if (!firebase.apps.length) {
      authMethods.initFirebase();
    }
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true, pendingUser: false });
      } else {
        this.setState({ authed: false, pendingUser: false });
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
              <PrivateRoute path='/friends' exact component={Friends} authed={this.state.authed}/>
              <PrivateRoute path='/holidays' exact component={Holidays} authed={this.state.authed}/>
              <PrivateRoute path='/friends/new' exact component={NewFriend} authed={this.state.authed}/>
              <PrivateRoute path='/holidays/new' exact component={NewHoliday} authed={this.state.authed}/>
              <PrivateRoute path='/friends/:id/edit' exact component={EditFriend} authed={this.state.authed}/>
              {/* <PrivateRoute path='/home' component={Home} authed={this.state.authed}/>
              <PrivateRoute path='/home' component={Home} authed={this.state.authed}/>
              <PrivateRoute path='/home' component={Home} authed={this.state.authed}/>
              <PrivateRoute path='/home' component={Home} authed={this.state.authed}/> */}
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
