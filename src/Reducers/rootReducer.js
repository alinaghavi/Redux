const initState = {
    posts: []
};
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_POST':
            let newPosts = state.posts.filter(post => action.id !== post.id);
            return ({
                ...state,
                posts: newPosts
            });
        case 'GET_ALL_POSTS':
            return ({
                ...state
            });
        case 'GET_ALL_POSTS_SUCCESS':
            return ({
                ...state,
                posts: action.payload.data.slice(0,10)
            });
        case 'GET_ALL_POSTS_FAIL':
            break;
        default:
            return state;

    }
};

export default rootReducer;