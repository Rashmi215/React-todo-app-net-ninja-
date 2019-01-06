import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions/postActions';

class Post extends Component{
  // state = {
  //   post: ''
  // };
  // componentDidMount(){
  //   let id = this.props.match.params.post_id;
  //   axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  //        .then(res =>{
  //          this.setState({ post: res.data })
  //        })
  // }
  deleteClick = () =>{
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/');
  }

  render(){
    const {post} = this.props;
    const singlePost = post ? (
      <div className = 'post'>
        <h4 className = 'center' >{ post.title }</h4>
        <p>{ post.body }</p>
        <div className = 'center'>
          <button className = 'btn grey' onClick = {this.deleteClick}>
             Delete Post
          </button>
        </div>
      </div>
    ) : (
      <div className = 'center'>Loading post...</div>
    )

    return(
      <div className = 'container'>{ singlePost }</div>
    );
  }
}

const mapStateToProps = (state, ownProps) =>{
  let id = ownProps.match.params.post_id;
  return{
    post: state.posts.find(post => post.id === id)
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    deletePost: (id) =>{ dispatch(deletePost(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
