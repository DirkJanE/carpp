import React, {useContext} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {LoginSignup, Maps, Messages, Profile} from './pages';
import './App.css';
import {CarppContext} from './components/context/CarppContext';

function App() {

    const { isAuth } = useContext(CarppContext);

  return (
         <Switch>
            <Route exact path="/">
                <LoginSignup />
            </Route>
            <Route exact path="/maps">
                {isAuth ? <Maps /> : <Redirect to="/" />}
            </Route>
             <Route exact path="/messages">
                 {isAuth ? <Messages /> : <Redirect to="/" />}
             </Route>
             <Route exact path="/profile">
                 {isAuth ? <Profile /> : <Redirect to="/" />}
             </Route>
        </Switch>
  );
}

export default App;

