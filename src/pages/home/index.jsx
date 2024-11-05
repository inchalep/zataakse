import React, { useCallback, useEffect, useState } from "react";
import Categories from "../../components/categories";
import ProductList from "../../components/productList";
import { changeLimit, fetchProducts } from "../../store/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { FaFilter } from "react-icons/fa";
import { FaFilterCircleXmark } from "react-icons/fa6";

const Home = () => {
  const [isFilterAllow, setIsFilterAllow] = useState(false);
  const state = useSelector((state) => state.products);
  const { limit, isLoading, productsList } = state;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts(limit));
  }, [limit]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollable = document.documentElement;
    const bottom =
      scrollable.scrollHeight === scrollable.scrollTop + window.innerHeight;
    if (bottom && !isLoading && limit < productsList.total) {
      dispatch(changeLimit(10));
    }
  };

  const renderProducts = useCallback(() => {
    return <ProductList state={state} />;
  }, [state]);

  return (
    <div className='wrapper relative py-6 flex justify-between items-start p-4 gap-x-8'>
      <button
        onClick={() => setIsFilterAllow((prev) => !prev)}
        className='lg:hidden absolute z-10 top-7 right-2'
      >
        {isFilterAllow ? <FaFilterCircleXmark /> : <FaFilter />}
      </button>
      <div className='hidden lg:block w-2/12 h-full sticky top-0'>
        <Categories />
      </div>
      {isFilterAllow ? (
        <div className='absolute bg-white w-full left-0'>
          <Categories />
        </div>
      ) : null}
      <div className='w-full lg:w-10/12'>{renderProducts()}</div>
    </div>
  );
};

export default Home;
