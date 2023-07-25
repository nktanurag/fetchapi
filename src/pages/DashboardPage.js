import React from 'react';

function DashboardPage(props) {
    return (
        <div style={{ textAlign: "center" }} className='dashboard-section'>
            <h1>Dashboard</h1>
            <p style={{margin: "15px", textAlign: "center" }}>Welcome to the Product Catalog App, a React-based web application that fetches product data from an external API and provides a seamless user experience for browsing, exploring, and reviewing various products. The app is built with React, Redux, and React Router, ensuring a smooth and responsive interface for users to discover and engage with the products.</p>

        </div>
    );
}

export default DashboardPage;