import React, { useState } from 'react';
import {compose,pipe} from "lodash/fp";
import {
} from './HomeSlice';
//import styles from './Home.module.css';
//import axios from 'axios';
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


export default function Login(props) {
          return(
                    <div className="Home">Home</div>);
}