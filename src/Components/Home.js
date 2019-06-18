import React, {Component} from 'react';
import '../Css/App.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import pokeball from '../Images/pokeball.png';
import { connect } from 'react-redux';


class Home extends Component {
    render() {
        console.log(this.props);
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

export default connect(mapStateToProps)(Home);
