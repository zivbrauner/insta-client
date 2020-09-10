import React, { useState } from 'react';
import {compose,pipe} from "lodash/fp";
import {
} from './HomeSlice';
//import styles from './Home.module.css';
import axios from 'axios';
import store from '../core/store';
import history from '../core/history';
import Post  from '../post/Post';

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

export default class Home extends React.Component {
          state = {
              posts: []
          }

          async getPosts(user){
                    console.log('hellow');
                    let res = await axios.get('http://localhost:3000/api/posts/'+ user, {withCredentials: true});
                    store.dispatch({
                              type: 'updatePosts',
                              payload: { 
                                posts: res.data.json()
                              }
                          })
                    console.log(res.data);
                    this.setState({ posts: res.data });
          }
          
          async componentDidMount() {
                    let user = store.getState().UserReducer.userId;
                    console.log('hellow');
                    let res = await axios.get('http://localhost:3000/api/posts/'+ user, {withCredentials: true});
                    store.dispatch({
                              type: 'updatePosts',
                              payload: { 
                                posts: res.data
                              }
                          })
                    
                    let pos = [];
                    for (var i = 0; i < res.data.length; i++)
                    {
                              pos[i]= {
                                        description: res.data[i].Description,
                                        image: res.data[i].imageLink,
                                        id: res.data[i]._id,
                                        likes: res.data[i].like,
                                        comments: res.data[i].comments
                              }
                    }
                    console.log(pos);

                    let postim = [];
                    for (var i = 0; i < pos.length; i++)
                    {
                              postim[i] = new Post(pos[i]);
                    }
                    console.log(postim);
                    this.setState({ posts: postim });
          };


          render() {
              return (
                  <div>Home
                      {this.state.posts.map((post) => (
                          <Post key={post.id} description={post.description} image = {post.image} id = {post.id} comments = {post.comments} likes = {post.likes}/>
                      ))}
                  </div>
              )
          }

      }