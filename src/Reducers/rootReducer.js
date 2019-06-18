const initState = {
    posts: [
        {id: 1, title: 'this is first title and test title', body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dicta dolore ipsum. Aliquam aut cupiditate debitis doloremque, enim, est iure nam nihil nisi quo, rerum sint vitae voluptatum. Blanditiis, distinctio!'},
        {id: 2, title: 'this is second title and test title', body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dicta dolore ipsum. Aliquam aut cupiditate debitis doloremque, enim, est iure nam nihil nisi quo, rerum sint vitae voluptatum. Blanditiis, distinctio!'},
        {id: 3, title: 'this is third title and test title', body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dicta dolore ipsum. Aliquam aut cupiditate debitis doloremque, enim, est iure nam nihil nisi quo, rerum sint vitae voluptatum. Blanditiis, distinctio!'},
    ]
};
const rootReducer = (state = initState, action) => {
    return state;
};

export default rootReducer;