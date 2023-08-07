import React, { useEffect, useRef } from "react";
import { connect } from "react-redux"; //The connect function is a higher-order function that connects the Redux store to a React component
import { useState } from "react";
import Slider from "@mui/material/Slider";
import { Grid, Stack, Typography, Box } from "@mui/material";

import { Product } from "../components/Product";
import { getProductsSuccess } from "../actions/productsActions";
import { getProducts } from "../actions/productsActions";
import { getProductsFailure } from "../actions/productsActions";

function fetchProducts(searchText) {
  return async (dispatch) => {
    //console.log(searchText)
    dispatch(getProducts());
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      //console.log(data)
      let newdata;
      if (data && data.products && Object.keys(data.products).length) {
        if (searchText !== "") {
          newdata = data.products.filter((product) => {
            return product.title
              .toLowerCase()
              .includes(searchText.toLowerCase());
          });
        } else {
          newdata = data.products;
        }
      }
      //console.log('newdata',newdata)
      dispatch(getProductsSuccess(newdata));
    } catch (error) {
      dispatch(getProductsFailure());
    }
  };
}
function ProductsPage({ dispatch, loading, productList, hasErrors }) {
  const [searchText, setSearchText] = useState("");
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [sortType, setSortType] = useState("");
  const idRef = useRef();

  //console.log(products)
  useEffect(() => {
    idRef.current = setTimeout(() => {
      dispatch(fetchProducts(searchText));
    }, 1000);
    //why return (?)
    return () => clearTimeout(idRef.current);
  }, [searchText]);

  //showing loading,eror or success state
  const renderProducts = () => {
    if (loading) return <p style={{ color: "white" }}>loading products...</p>;
    if (hasErrors)
      return <p style={{ color: "white" }}>unable to display products</p>;

    let copyProductList = productList;
    copyProductList = copyProductList.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    if (sortType === "title")
      copyProductList.sort((a, b) => (a.title < b.title ? -1 : 1));
    if (sortType === "priceAsc")
      copyProductList.sort(
        (a, b) =>
          a.price -
          a.discountPercentage * 0.01 * a.price -
          (b.price - b.discountPercentage * 0.01 * b.price)
      );
    if (sortType === "priceDesc")
      copyProductList.sort(
        (a, b) =>
          b.price -
          b.discountPercentage * 0.01 * b.price -
          (a.price - a.discountPercentage * 0.01 * a.price)
      );
    if (sortType === "rating")
      copyProductList.sort((a, b) => b.rating - a.rating);
    if (sortType === "discountPercentage")
      copyProductList.sort(
        (a, b) => b.discountPercentage - a.discountPercentage
      );

    productList = copyProductList;

    return (
      <Grid container spacing={2}>
        {productList &&
          Object.keys(productList).length &&
          productList.map((product) => (
            <Grid item xs={4}>
              <Product key={product.id} product={product} excerpt />
            </Grid>
          ))}
      </Grid>
    );
  };

  return (
    <>
      <input
        id="search--product--page"
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search your product..."
      />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography id="input-slider" gutterBottom color="white">
          Filter by price
        </Typography>

        <Grid item xs>
          <Slider
            style={{ width: "20rem", padding: "5px", margin: "7px" }}
            value={priceRange}
            onChange={(e, newValue) => setPriceRange(newValue)}
            step={10}
            min={0}
            max={2000}
            valueLabelDisplay="auto"
          />
        </Grid>
      </Grid>

      <section className="productsPage--section">
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <h1 style={{ color: "white" }}>Products</h1>
          <div>
            <label className="sort--products--select">
              {/* Select sort type:    */}
              <select
                style={{ width: "90%" }}
                name="selectedSortType"
                value={sortType}
                defaultValue={"title"}
                onChange={(e) => setSortType(e.target.value)}
              >
                <option value="" selected disabled hidden>
                  Sort by:{" "}
                </option>
                <option value="priceAsc">Price: Low to High</option>
                <option value="priceDesc">Price: High to Low</option>
                <option value="title">Title</option>
                <option value="rating">Rating: High to Low</option>
                <option value="discountPercentage">
                  Discount Percentage: High to Low
                </option>
              </select>
            </label>
          </div>
        </Stack>
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

const mapStateToProps = (state) => {
  return {
    loading: state.products.loading,
    productList: state.products.productList,
    hasErrors: state.products.hasErrors,
  };
};
//connect redux to react
export default connect(mapStateToProps)(ProductsPage);
