import React from 'react';
import '../index.css'

function About() {
    return (
        <div className='about--section'>
            <h1 style={{ textAlign: "center" }}>About</h1>

            <h4 style={{ textAlign: "center", paddingTop: "15px" }}>Features</h4>
            <ol className='ordered--list'>
                <li id='list--item'>Product Listing Page: Upon opening the app, users are presented with a visually appealing and organized product listing page. Each product card displays essential information, such as the product name, price, and a brief description, making it easy for users to get an overview of the available products.</li>
                <li id='list--item'>Product Details Page: When users click on a specific product card, they are redirected to a dedicated product details page. Here, users can find more comprehensive information about the selected product, including its detailed description, specifications, and any additional relevant details.</li>
                <li id='list--item'>User Reviews Section: Users can provide product feedback by leaving reviews and ratings. The app features a review section for each product, showcasing the comments and ratings submitted by previous customers. This functionality empowers users to make informed decisions based on the experiences of others.</li>
            </ol>
           
            <h4 style={{ textAlign: "center", marginTop: "10px" }}>Technologies Used:</h4>
            <ol className='ordered--list'>
                <li id='list--item'>React: A popular JavaScript library for building interactive user interfaces.</li>
                <li id='list--item'>Redux: A state management library that helps maintain a centralized state for the entire application.</li>
                <li id='list--item'>React Router: A tool enabling seamless navigation and routing within the React application.</li> 
            </ol>

        </div>
    );
}

export default About;
