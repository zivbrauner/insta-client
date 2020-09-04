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

// async function getPosts(user){
//           console.log(user);
//           let res = await axios.get('http://localhost:3000/api/posts/'+ user, {withCredentials: true});
//           store.dispatch({
//                     type: 'updatePosts',
//                     payload: { 
//                       posts: res.data
//                     }
//                 })
//           console.log(res);
//           return res;
// }


// export default function Home(props) {
//           let user = store.getState().UserReducer.userId;
//           return(
//                     <div className="Home">Home
//                               <ul>
//                                         <li />
//                               </ul>
//                     </div>);
// }

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
          
          componentDidMount() {
                    let user = store.getState().UserReducer.userId;
                    getPosts(user);
          };

          render() {
              return (
                  <ul>
                      {this.state.posts.map((post) => (
                          <li key={post._id}>{post.Description}</li>
                      ))}
                  </ul>
              )
          }

      }