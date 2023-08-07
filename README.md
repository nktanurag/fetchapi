# Description:
Welcome to the Product Catalog App, a React-based web application that fetches product data from an external API and provides a seamless user experience for browsing, exploring, and reviewing various products. The app is built with React, Redux, and React Router, ensuring a smooth and responsive interface for users to discover and engage with the products.

# Features:

1. Product Listing Page: Upon opening the app, users are presented with a visually appealing and organized product listing page. Each product card displays essential information, such as the product name, price, and a brief description, making it easy for users to get an overview of the available products.

2. Product Details Page: When users click on a specific product card, they are redirected to a dedicated product details page. Here, users can find more comprehensive information about the selected product, including its detailed description, specifications, and any additional relevant details.

3. User Reviews Section: Users can provide product feedback by leaving reviews and ratings. The app features a review section for each product, showcasing the comments and ratings submitted by previous customers. This functionality empowers users to make informed decisions based on the experiences of others.

4. Product Search with Debouncing: The app features an intelligent product search functionality that dynamically filters products based on the words contained in their titles. As users type in the search box, the app utilizes debouncing to optimize performance by reducing unnecessary API requests. The app waits for a short period of inactivity after each keystroke before sending the search query to the server, thus preventing excessive API calls and ensuring a smooth user experience.

# Technologies Used:

1. React: A popular JavaScript library for building interactive user interfaces.
2. Redux: A state management library that helps maintain a centralized state for the entire application.
3. React Router: A tool enabling seamless navigation and routing within the React application.
4. HTML and CSS: To create the app's structure and define its visual styles.
5. External Product API: The app fetches product data from an external API to ensure up-to-date product information.

# Getting Started:
To run the Product Catalog App locally on your machine, follow these steps:

1. Clone the repository from GitHub.
2. Install the required dependencies using npm or yarn.
3. Run the development server using npm start or yarn start.
4. Access the app through your preferred web browser at localhost:3000.


# Contributing:
We welcome contributions from the open-source community. If you find any issues, have suggestions for improvements, or want to add new features, please open an issue or submit a pull request.

