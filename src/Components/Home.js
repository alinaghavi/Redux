import React, {Component} from 'react';
import '../Css/App.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import pokeball from '../Images/pokeball.png';

class Home extends Component {
    state = {
        posts: []
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                this.setState({
                    posts: res.data.slice(0, 10)
                });
                console.log(res);
            })
    }


    render() {
        const {posts} = this.state;
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


export default Home;
