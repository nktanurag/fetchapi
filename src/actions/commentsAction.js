//action type
export const GET_COMMENTS = 'GET_COMMENTS'
export const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS'
export const GET_COMMENTS_FAILURE = 'GET_COMMENTS_FAILURE'

export const ADD_COMMENT = 'ADD_COMMENT'
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS'
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE'

//actions
export const getComments = () => ({
    type: GET_COMMENTS,
})
export const getCommentsSuccess = (commentList) => ({
    type: GET_COMMENTS_SUCCESS,
    payload: commentList,
})
export const getCommentsFailure = () => ({
    type: GET_COMMENTS_FAILURE,
})

export const addComment = (comment) => ({
    type: ADD_COMMENT,
    payload: comment,
})
export const addCommentSuccess = () => ({
    type: ADD_COMMENT_SUCCESS,
})
export const addCommentFailure = () => ({
    type: ADD_COMMENT_FAILURE,
})


export function fetchComments() {
    //no need for async
    return async (dispatch) => {
        dispatch(getComments())
    }
}
