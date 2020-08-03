
import React, { useState } from 'react';
import {
          Redirect,
          Route
        } from "react-router-dom";
//import { useSelector, useDispatch } from 'react-redux';
//import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import {authService} from './auth-service';

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
export default function PrivateRoute({ children, ...rest }) {
          console.log('in private route')
          return (
            <Route
              {...rest}
              render={({ location }) =>
                authService.isAuthenticated ? (
                  children
                ) : (
                  <Redirect
                    to={{
                      pathname: "/login",
                      state: { from: location }
                    }}
                  />
                )
              }
            />
          );
        }