import React, {Component} from 'react';
import '../Css/App.css';
import {Link} from 'react-router-dom';
import pokeball from '../Images/pokeball.png';
import { connect } from 'react-redux';
import {getAllPosts} from "../Actions/postActions";


class Home extends Component {
    componentDidMount() {
         this.props.getAllPosts();
    }
    render() {
        const {posts} = this.props;
        const postList = (posts.length) ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <img src={pokeball} alt="Image" />
                            <Link to={'/posts/' + post.id}>
                                <span className="card-title">
                                    {post.title}
                                </span>
                            </Link>
                            <p>
                                {post.body}
                            </p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">
                No Post Yet
            </div>
        );
        return (
            <div>
                <div className="container">
                    <h4 className="center">
                        Post List
                    </h4>
                    {postList}
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return({
        posts: state.posts
    })
};

const mapsDispatchToProps = (dispatch) => {
    return{
        getAllPosts: () => { dispatch(getAllPosts()) }
    }
};


export default connect(mapStateToProps, mapsDispatchToProps )(Home);
