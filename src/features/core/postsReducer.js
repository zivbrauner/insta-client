const initialState = {
          Posts: []
        }

export default function PostsReduser(state = initialState, action){
          switch(action.type){
                    case  "updatePosts":
                              return    Object.assign({}, state, {
                                        Posts: action.payload.posts   
                              });
                    case "clearPosts":
                              return Object.assign({}, state, {
                                        Posts: []   
                              });
                    default: return state;  
          }
          }        
