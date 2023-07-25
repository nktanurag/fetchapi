import { combineReducers } from 'redux'
import productsReducer from './productsReducer'
import commentsReducer from './commentsReducer'

//combineReducers helper function turns an object whose values 
//are different reducing functions into a single reducing function 
//you can pass to createStore

const rootReducer = combineReducers ({
    products: productsReducer,
    comments: commentsReducer,
})

export default rootReducer