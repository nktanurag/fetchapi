import * as actions from '../actions/productsActions'

export const initialState = {
    productList: [],
    loading: false,
    hasErrors: false,
};

export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_PRODUCTS:
            return { ...state, loading: true }
        case actions.GET_PRODUCTS_SUCCESS:
            return { productList: action.payload, loading: false, hasErrors: false }
        case actions.GET_PRODUCTS_FAILURE:
            return {...state, loading: false, hasErrors: true }
        default:
            return state
    }
}

