import React from "react";
import '../index.css'

export const ProductImages = ( {images} ) => {
    return (
        <div className="product--gallery">
            {images[0] && <img id='gallery-cell' src={images[0]} />}
            {images[1] && <img id='gallery-cell' src={images[1]} />}
            {images[2] && <img id='gallery-cell' src={images[2]} />}
            {images[3] && <img id='gallery-cell' src={images[3]} />}
        </div>
    )
}