const initialState = {
          Authenticated: false,
          userId: ''
        }

export default function UserReduser(state = initialState, action){
          switch(action.type){
                    case  "Authenticated":
                              return    Object.assign({}, state, {
                                        Authenticated: true,
                                        userId: action.payload.userId     
                              });
                    case "notAuthenticated":
                              return Object.assign({}, state, {
                                        Authenticated: false,
                                        userId: ''    
                              });
                    default: return state;  
          }
          }        
