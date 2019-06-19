export function getAllPosts(){
    return {
        type:'GET_ALL_POSTS',
        payload:{
            request:{
                url:'/posts',
            }
        },
        options: {
            onSuccess({ getState, dispatch, response }) {
                dispatch({payload: response.data });
            },
            onError({ getState, dispatch, error }) {
                dispatch({payload: error.response });
            },
        }
    }
}

export const deletePost = (id) => {
    return {
        type: 'DELETE_POST',
        id
    }
};
