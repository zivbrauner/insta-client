import React, { useState } from 'react';
import store from '../core/store';
//import { useSelector, useDispatch } from 'react-redux';
//import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from 'axios';
import {

  } from './postSlice';
  import styles  from './post.module.css';
  //import axios from 'axios';

  export default class  Post extends React.Component {

    state = {
      description: '',
      image: '',
      likes: [],
      comments: [],
      id: '',
      input: ''
  }


    constructor(props) {
      super(props);
      this.description = props.description;
      this.image = props.image;
      this.id = props.id;
      this.likes = props.likes;
      this.comments = props.comments;
      this.input = '';
      //console.log('new post created: '+ this);
      this.likePost = this.likePost.bind(this);
      this.commentOnPost = this.commentOnPost.bind(this);
    }

    componentDidMount(){
      this.setState({ 
        description: this.props.description,
        image: this.props.image,
        likes: this.props.likes,
        comments: this.props.comments,
        id: this.props.id,
        input: ''
       });
       console.log('componentDidMount' + this.state);
    }

    async likePost(){
      var data = {
        "like" : true,
        "userId": store.getState().UserReducer.userId
      }
      let res = await axios.post(`http://localhost:3000/api/posts/${this.state.id}/likes`, data, {withCredentials: true});
      console.log(res.data);
      this.setState({
        likes: res.data.like
      })
    }

    async commentOnPost(){

      var data = {
        "comment" : this.state.input,
        "userId": store.getState().UserReducer.userId
      }
      let res = await axios.post(`http://localhost:3000/api/posts/${this.state.id}/comments`, data, {withCredentials: true});
      console.log(res.data);
      this.setState({
        comments: res.data.comments,
        input: ''
      })
    }

    updateInput(e) {
      this.setState({
        input: e.target.value
      });
    }

    render() {
      
      return (
        <div className={styles.post}>
          <h3>{this.props.description}</h3>
          <img src= {this.props.image}/>
          <br></br>
          {
          (this.state.comments === undefined) || (this.state.comments.length === 0) ? (<span></span>) : (<span>{this.state.comments[this.state.comments.length - 1].comment}</span>) 
          }
          <br></br>
          <input type="text" className="commentInput" value={this.state.input} onChange={e => this.updateInput(e)}/>
          <br></br>
          <button onClick={this.likePost}>Like { this.props.likes === undefined ? ('') :
          (this.state.likes.length)}</button>
          <button onClick={this.commentOnPost}>Comment { this.props.comments === undefined ? ('') :
          (this.state.comments.length)}</button>
        </div>
      );
    }
  }