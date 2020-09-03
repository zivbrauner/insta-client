import React, { useState } from 'react';
import {compose,pipe} from "lodash/fp";
import {
} from './HomeSlice';
//import styles from './Home.module.css';
import axios from 'axios';
import store from '../core/store';
import history from '../core/history';

const unsubscribe = store.subscribe(()=> {
          if(store.getState().Authenticated === false){
                    history.push("/login");
                    unsubscribe();
          }
})

let input = "   javascript   ";
const trim = str => str.trim();
const wrap = type => str => `<${type}>${str}</${type}>`;
const transform = pipe(trim, wrap("div"));
transform(input);

async function getPosts(user){
          console.log(user);
          let res = await axios.get('http://localhost:3000/api/posts/'+ user, {withCredentials: true});
          console.log(res);
          return res;
}

// add get code with axios and load postS
export default function Home(props) {
          let user = store.getState().userId;
          console.log(getPosts(user).data); 
          return(
                    <div className="Home">Home</div>);
}