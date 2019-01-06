const initState = {
  posts: [
    {id: '1', title: 'Andrew Mead', body: 'Super cool Nodejs course on Udemy. Fun to learn!'},
    {id: '2', title: 'Shaun', body: 'Net ninja is one of the most loved technical channel on youtube.'},
    {id: '3', title: 'Stephen Grider', body: 'Learn React and Redux from this highly acknowledged indtructor.'}
  ]
}

const rootReducer = (state = initState, action) =>{
   if(action.type === 'DELETE_POST'){
     let newPosts = state.posts.filter(post => action.id !== post.id);
     return{
       ...state,
       posts: newPosts
     }
   }
   return state;
}

export default rootReducer;
