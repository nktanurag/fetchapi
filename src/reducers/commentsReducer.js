import * as actions from '../actions/commentsAction'

export const initialState = {
    commentList: [{
        id:0,
        productId:1,
        name :'Ankit Anurag',
        email :'test@gmail.com',
        rating :'5',
        feedback :'Apple hasn’t made any bones about the fact that there are certain products it has that aren’t meant for everyone. Some of these — like the Mac Studio or even the Mac mini — are way too niche and will be sought by those who really need them. And then there are those that bring the best of Apple at an expensive — very expensive — price point but are desired by many.'
    },{
        id:1,
        productId:1,
        name :'Anurag Ankit',
        email :'test@gmail.com',
        rating :'4',
        feedback :'The iPhone’s Pro models have always been in the category — the coveted one, the desirable one, the one that makes you want to junk that financial prudence that has been drilled in you. '
    },{
        id: 2,
        productId:1,
        name :'Nilesh Singh',
        email :'test@gmail.com',
        rating :'3',
        feedback :'Apple wants your money and the iPhone 14 Pro Max is that dangling proposition that may just want you to break the bank and get one.'
    },{
        id: 3,
        productId:1,
        name :'Rahul',
        email :'test@gmail.com',
        rating :'5',
        feedback :'Phone is just awsome. Good packaging and on time delivery by amazon. Very mice phone and camera. Just loved it'
    }],
    loading: false,
    hasErrors: false,
};

export default function commentsReducer(state = initialState, action){
    switch (action.type) {
        case actions.GET_COMMENTS:
            return { ...state, loading: true }
        case actions.GET_COMMENTS_SUCCESS:
            //console.log(action,'in prod reducer')
            return { ...state, commentList: action.payload, loading: false, hasErrors: false }
        case actions.GET_COMMENTS_FAILURE:
            return {...state, loading: false, hasErrors: true }
        case actions.ADD_COMMENT:
            // console.log({ ...state, comments: [...state.comments, action.payload] })
            return { ...state, commentList: [...state.commentList, action.payload] }
        case actions.ADD_COMMENT_SUCCESS:
            return state
        case actions.ADD_COMMENT_FAILURE:
            return {...state, loading: false, hasErrors: true }
        default:
            return state
    }
}

