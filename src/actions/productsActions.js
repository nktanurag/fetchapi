//action type
export const GET_PRODUCTS = 'GET_PRODUCTS'
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS'
export const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE'

//actions- only source of information for the store
export const getProducts = () => ({
    type: GET_PRODUCTS,
})
export const getProductsSuccess = (products) => ({
    type: GET_PRODUCTS_SUCCESS,
    payload: products,
})
export const getProductsFailure = () => ({
    type: GET_PRODUCTS_FAILURE,
})


export function fetchProducts() {
    return async (dispatch) => {
        dispatch(getProducts())
        try {
            const response = await fetch('https://dummyjson.com/products')
            const data = await response.json()
            dispatch(getProductsSuccess(data.products))
            //console.log(data)
        }catch(error){
            dispatch(getProductsFailure())
        }
    }
}