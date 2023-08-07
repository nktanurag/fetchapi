import React from "react";
import { useState } from "react";

import { connect } from 'react-redux'
// import { useEffect } from "react";

import { addComment } from "../actions/commentsAction";

import '../index.css'
import productsReducer from "../reducers/productsReducer";



let data;
export const ProductReviewForm = ({ productId, commentId, addComment}) => {
    const [customerName, setCustomerName] = useState('')
    const [customerEmail, setCustomerEmail] = useState('')
    const [rating, setRating] = useState('')
    const [productReview, setProductReview] = useState('')

    const onNameChange = e => setCustomerName(e.target.value)
    const onEmailChange = e => setCustomerEmail(e.target.value)
    const onRatingChange = e => setRating(e.target.value)
    const onReviewChange = e => setProductReview(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()
        data = {
            email: customerEmail,
            feedback: productReview,
            id: commentId,
            name: customerName,
            productId: productId,
            rating: rating,
        }
        setCustomerName('')
        setCustomerEmail('')
        setRating('')
        setProductReview('')
        
        addComment(data)
    }

    //autocomplete not working for all inputs
    return (
        <div className="product--review--input">
            <form onSubmit={handleSubmit} autoComplete="off">
                <h2>Review product</h2>

                {/* <label for="customerName">Name</label> */}
                <input 
                    type='text' 
                    id='customerName' 
                    placeholder='Your Name' 
                    value={customerName}
                    onChange={onNameChange}
                    required
                />

                {/* <label for="customerEmail">Email</label> */}
                <input 
                    type='email' 
                    id='customerEmail' 
                    placeholder='Your Email' 
                    autoComplete="off"
                    value={customerEmail}
                    onChange={onEmailChange}
                    required
                />

                <label htmlFor="rating">Rating</label>
                <select 
                    id="rating" 
                    name="rating"
                    value={rating}
                    onChange={onRatingChange}
                    required
                >
                    <option value="" selected disabled hidden>Choose rating</option>
                    <option value="1">1☆</option>
                    <option value="2">2☆</option>
                    <option value="3">3☆</option>
                    <option value="4">4☆</option>
                    <option value="5">5☆</option>
                </select>

                <textarea 
                    id="subject" 
                    name="customer--review" 
                    placeholder="Write something about the product..."
                    value={productReview}
                    onChange={onReviewChange}
                />
                <button type="submit" value="Submit">Submit</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addComment: data => {
            const action = addComment(data)
            return dispatch(action)
        }
    }
}

// export default ProductDetails;
export default connect(null, mapDispatchToProps)(ProductReviewForm);
