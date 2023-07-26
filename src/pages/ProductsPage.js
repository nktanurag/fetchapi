import React, {useEffect} from 'react';
import { connect } from 'react-redux' //The connect function is a higher-order function that connects the Redux store to a React component
import { useState } from 'react';

import { Product } from '../components/Product'
import { getProductsSuccess } from '../actions/productsActions';
import { getProducts } from '../actions/productsActions';
import { getProductsFailure } from '../actions/productsActions';

function fetchProducts(searchText) {
    return async (dispatch) => {
        //console.log(searchText)
        dispatch(getProducts())
        try {
            const response = await fetch('https://dummyjson.com/products')
            const data = await response.json()
            console.log(data)
            let newdata
            if(data && data.products  && Object.keys(data.products).length){ 
                if(searchText !== '') {
                    newdata = data.products.filter((product) => {
                        return product.title.toLowerCase().includes(searchText.toLowerCase())
                    })
                }
                else{
                    newdata = data.products
                }
            }
            //console.log('newdata',newdata)
            dispatch(getProductsSuccess(newdata))
        }catch(error){
            dispatch(getProductsFailure())
        }
    }
}
function ProductsPage({ dispatch, loading, products, hasErrors }) {
    const [searchText, setSearchText] = useState('')
    console.log(products)
    useEffect(() => {
        const id = setTimeout(() => {
            dispatch(fetchProducts(searchText))
        }, 1000)
        //why return (?)
        return () => clearTimeout(id)
    },[dispatch, searchText])
    
    //showing loading,eror or success state
    const renderProducts = () => {
        if(loading) return <p style={{color: 'white'}}>loading products...</p>
        if(hasErrors) return <p style={{color: 'white'}}>unable to display products</p>
        //console.log(typeof products, products);
        console.log(products)
        if(products && Object.keys(products).length){ 
            return products.map(product => 
                <Product key={product.id} product={product} excerpt/>
            )
        }       
    }

    return (
        <>
            <input 
                id='search--product--page' 
                type='text' 
                value={searchText} 
                onChange={(e) => setSearchText(e.target.value)} 
                placeholder='Search your product...'
            />
            <section className='productsPage--section'>
                <h1 style={{color: 'white'}}>Products</h1>
                {renderProducts()}
            </section>
        </>
    );
}

// We'll pass a parameter called mapStateToProps 
// to connect. This aptly named function will take any state 
// from the Redux store and pass it to the props of the React 
// component. We'll bring in loading,
//  posts, and hasErrors from the Redux postsReducer.

const mapStateToProps = (state) => ({
    loading: state.products.loading,
    products: state.products.products,
    hasErrors: state.products.hasErrors,
})

//connect redux to react
export default connect(mapStateToProps)(ProductsPage);
