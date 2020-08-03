import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//import { Counter } from './features/counter/Counter';
import Login  from './features/login/Login';
import Home  from './features/home/Home';

import PrivateRoute  from './features/core/PrivateRoute';
import './App.css';
import axios from 'axios';
import {Redirect} from 'react-router-dom';


function App() {
  // try {

  //   var email = '';
  //   var password = '';
  //   var data = {
  //     "userName": email,
  //     "password": password
  //   }

  //   useEffect(async ()=>{
  //     let res = await axios.post('http://localhost:3000/api/login', data, {withCredentials: true});
  //     console.log(res); 
  //     if(res.status === 200)
  //     {
  //         console.log('login successful');
  //         return( <Redirect
  //           to={{
  //             pathname: "/"
  //           }}
  //         />);
  //     }
  //     else
  //     {
  //       return( <Redirect
  //         to={{
  //           pathname: "/login"
  //         }}
  //       />);
  //     }
      
  //   });
  

  // } catch (e) {
  //   alert(e.message);
  // }

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            {/* <Route path="/">
              <Home />
            </Route> */}
            <PrivateRoute path="/">
              <Home />
            </PrivateRoute>
          </Switch>
        </Router>
      </header>
    </div>
  );
 
}

export default App;
