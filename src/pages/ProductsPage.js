import React, {useEffect} from 'react';
import { connect } from 'react-redux' //The connect function is a higher-order function that connects the Redux store to a React component
import { useState } from 'react';

//bring asynchronus fetchPosts action
import { fetchProducts } from '../actions/productsActions'
import { Product } from '../components/Product'
import { render } from 'react-dom';

function ProductsPage({ dispatch, loading, products, hasErrors }) {
    const [searchText, setSearchText] = useState('')

    // useEffect(() => {
    //     const id = setTimeout(() => {
    //         dispatch(fetchProducts(searchText))
    //     }, 1000)
    //     // clearTimeout(id)
    // },[dispatch, searchText])
    
    //showing loading,eror or success state
    const renderProducts = () => {
        if(loading) return <p style={{color: 'white'}}>loading products...</p>
        if(hasErrors) return <p style={{color: 'white'}}>unable to display products</p>
        //console.log(typeof products, products);
        console.log(products)
        if(products  && Object.keys(products).length){ 
            return products.products.map(product => 
                <Product key={product.id} product={product} excerpt/>
            )
        }       
        //     else {
        //         let listToDisplay = products.products.filter((product) => {
        //             return product.title.toLowerCase().includes(searchText.toLowerCase())
        //         })
        //         console.log(listToDisplay)
        //         return listToDisplay.map(product => 
        //             <Product key={product.id} product={product} excerpt/>
        //     )}
        // }
        // console.log(products)
    }

    return (
        <>
            {/* <input 
                id='search--product--page' 
                type='text' 
                value={searchText} 
                onChange={(e) => setSearchText(e.target.value)} 
                placeholder='Search your product...'
            /> */}
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
