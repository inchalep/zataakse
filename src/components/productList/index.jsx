import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../productCard";
import { FilterContext } from "../../context/filterContext";
import Loader from "../loader";

const ProductList = ({ state }) => {
  const [sortBy, setSortBy] = useState("");
  const [displayProducts, setDisplayProducts] = useState([]);
  const { productsList, isLoading } = state;
  const { filterValues } = useContext(FilterContext);

  useEffect(() => {
    if (productsList.products) {
      setDisplayProducts(productsList.products);
    }
  }, [productsList]);

  useEffect(() => {
    filterProducts();
  }, [filterValues]);

  const filterProducts = () => {
    const filteredData = productsList.products?.filter((item) => {
      return (
        ((filterValues.categories.includes(item.category) ||
          filterValues.brands.includes(item.brand)) &&
          item.price < filterValues.price) ||
        (filterValues.stocks[0] && item.stock > 0)
      );
    });
    if (filteredData.length > 0) {
      setDisplayProducts(filteredData);
    } else {
      setDisplayProducts([]);
    }
    if (
      filterValues.categories.length === 0 &&
      filterValues.brands.length === 0
    ) {
      setDisplayProducts(productsList.products);
    }
  };

  const handleSort = (e) => {
    setSortBy(e.target.value);
    const sortData = [...displayProducts].sort(
      (a, b) => a[e.target.value] - b[e.target.value]
    );
    setDisplayProducts(sortData);
  };

  return (
    <div className='w-full'>
      <div className='w-full flex justify-between items-center'>
        <p className='hidden lg:block text-sm md:text-base'>
          Showing {displayProducts?.length} of {productsList.total} Products
        </p>
        <div className='flex justify-between items-center gap-3 text-sm md:text-base'>
          <span>Sort By</span>
          <select
            className='shadow-md px-2 border rounded-md outline-none'
            value={sortBy}
            onChange={handleSort}
          >
            <option value=''>Select</option>
            <option value='price'>Price</option>
            <option value='rating'>Popular</option>
          </select>
        </div>
      </div>
      <div
        className={`flex gap-[3.6%] sm:gap-[2.6%] gap-y-6 sm:gap-y-8 flex-wrap py-5 ${
          isLoading ? "h-[calc(100vh-250px)] justify-center items-center" : null
        }`}
      >
        {isLoading ? <Loader /> : null}
        {!isLoading && displayProducts?.length === 0 ? (
          <h3>No products found.</h3>
        ) : null}
        {Array.isArray(displayProducts) &&
          displayProducts.map((product, index) => {
            return (
              <div key={index} className='w-[47.8%] sm:w-[23%]'>
                <ProductCard product={product} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductList;
