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

const ProductDetails = ( { dispatch, products, comments, hasErrors, loading } ) => {
    let { productId } = useParams()
    productId = Number(productId)


    useEffect(() => {
        dispatch(fetchProducts())
    },[dispatch])

    useEffect(() => {
        dispatch(fetchComments())
    },[dispatch])

    function showProductReview( comments ){
        console.log(comments)
        if(comments && Object.keys(comments).length){
            return comments.map(comment => {
                return( 
                    <div>
                        {productId === comment.productId && <ProductReviews key={comment.id} comment={comment} />}
                    </div>
                )
            })
        }
    }
    if(products  && Object.keys(products).length){           
        return products.products.map(product => {
            if(product.id === productId){
                return (
                    <div>
                        {/* product description */}
                        <Product key={product.id} product={product} />

                        {/* product images */}
                        <ProductImages key={product.id} images={product.images} />

                        {/* product review form*/}
                        <ProductReviewForm productId={productId} commentId={comments.length}/>
                        
                        {/* product review */}
                        <div className='product--review--display'>
                            <h2>Customer's reviews</h2>
                            {showProductReview(comments)}
                        </div>
                    </div>
                );

            }
        })
    }
}

const mapStateToProps = state => {
    return ({
        products: state.products.products,
        comments: state.comments.comments,
        loading: { products: state.products.loading, comments: state.comments.loading },
        hasErrors: { products: state.products.hasErrors, comments: state.comments.hasErrors },
    })
}

// export default ProductDetails;
export default connect(mapStateToProps)(ProductDetails);
