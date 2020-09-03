import React, { useState } from 'react';
import {

  } from './loginSlice';
  import styles from './login.module.css';

  //import {authService} from '../core/auth-service';

  import store from '../core/store';
  import history from '../core/history';
  import axios from 'axios';

  export default function Login(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
  
    try {
      var data = {
        "userName": email,
        "password": password
      }
    
      let res = await axios.post('http://localhost:3000/api/login', data, {withCredentials: true});
      console.log(res.data); 
      if(res.status === 200)
      {
          console.log('login successful');
          store.dispatch({
            type: 'Authenticated',
            payload: { 
              userId: res.data.userId
            }
        })
        console.log(store.getState());
        history.push("/");
      }
      else
      {
        store.dispatch({
          type: 'notAuthenticated',
          payload: { 
            userId: ''
          }
        });
          console.log('login failed');
      }
    } catch (e) {
      alert(e.message);
    }
  }

    return(
      <div className="Login">
      <form onSubmit={handleSubmit}
      className={styles.form}>
        <div controlId="email" bsSize="large">
          <h3>Email</h3>
          <input
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div controlId="password" bsSize="large">
          <h3>Password</h3>
          <input 
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </div>
        <button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </button>
      </form>
    </div>
    );
  }






