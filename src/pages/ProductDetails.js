import React from 'react';
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { useEffect } from 'react';

//importing actions
import { fetchProducts } from '../actions/productsActions';
import { fetchComments } from '../actions/commentsAction';

//importing components
import { Product } from '../components/Product';
import { ProductImages } from '../components/ProductImages';
import  ProductReviewForm  from '../components/ProductReviewForm'
import { ProductReviews } from '../components/ProductReviews'

import '../index.css'

//these are the props wrapper component is injecting?
const ProductDetails = ( { dispatch, productList, commentList, hasErrors, loading } ) => {
    let { productId } = useParams()
    productId = Number(productId)

    useEffect(() => {
        dispatch(fetchProducts())
    },[dispatch])

    useEffect(() => {
        dispatch(fetchComments())
    },[dispatch])

    function showProductReview( commentList ){
        if(commentList && Object.keys(commentList).length){
            return commentList.map(comment => {
                return( 
                    <div>
                        {productId === comment.productId && <ProductReviews key={comment.id} comment={comment} />}
                    </div>
                )
            })
        }
    }
    if(productList && Object.keys(productList).length){           
        return productList.map(product => {
            if(product.id === productId){
                return (
                    <div>
                        {/* product description */}
                        <Product key={product.id} product={product} />

                        {/* product images */}
                        <ProductImages key={product.id} images={product.images} />

                        {/* product review form*/}
                        <ProductReviewForm productId={productId} commentId={commentList.length}/>
                        
                        {/* product review */}
                        <div className='product--review--display'>
                            <h2>Customer's reviews</h2>
                            {showProductReview(commentList)}
                        </div>
                    </div>
                );
            }
        })
    }
}

const mapStateToProps = state => {
    return ({
        //products - productList
        productList: state.products.productList,
        commentList: state.comments.commentList,
        loading: { products: state.products.loading, comments: state.comments.loading },
        hasErrors: { products: state.products.hasErrors, comments: state.comments.hasErrors },
    })
}
//The return of connect() is a wrapper function that takes your 
//component and returns a wrapper component with the additional props 
//it injects
export default connect(mapStateToProps)(ProductDetails);
