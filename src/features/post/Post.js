import React, { useState } from 'react';
//import { useSelector, useDispatch } from 'react-redux';
//import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import {Redirect} from 'react-router-dom';
import {

  } from './postSlice';
  import styles from './post.module.css';
  //import axios from 'axios';

  export class  Post extends React.Component {
    constructor(props) {
      super(props);
      this.description = props.description;
      this.image = props.image;
    }

    render() {
      return (
        <div className="Post">
          <h1>{this.description}</h1>
          <img src= {this.image}/>
        </div>
      );
    }
  }