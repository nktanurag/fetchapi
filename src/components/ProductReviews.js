import React from 'react';
import '../index.css'

export const ProductReviews = ({ comment }) => {
    return (  
        <div id='review'>
            <h5> {comment.name} | {comment.rating} ☆</h5>
            <p>Customer Feedback: {comment.feedback}</p>
        </div>
    );
}

