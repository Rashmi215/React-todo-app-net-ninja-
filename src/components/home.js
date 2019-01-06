import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Rose from '../rose.jpg';
import { connect } from 'react-redux';

class Home extends Component{
  // state = {
  //   posts: []
  // }
  //
  // componentDidMount(){
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //        .then(res =>{
  //          this.setState({ posts: res.data.slice(0,10) });
  //       });
  // }

  render(){
    const {posts} = this.props;
    const postList = posts.length ? (
      posts.map(post =>{
        return(
          <div className = 'post card' key = {post.id}>
            <img src = {Rose} alt = 'A pic' />
            <div className = 'card-content'>
              <Link to = {`/${post.id}`}>
                <span className = 'card-title red-text' style = {{ cursor: 'pointer' }}>
                  <h5>{post.title}</h5>
                </span>
               </Link>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className = 'center'>No Posts Yet.</div>
    );
    return(
      <div className = 'container home'>
        <h4 className = 'center red-text'>Home</h4>
          {postList}
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home);
