import React, { useContext, useEffect } from "react";
import Checkbox from "../checkbox";
import { FilterContext } from "../../context/filterContext";
import RangeInput from "../rangeInput";
import { brandList, stockList } from "../../constants";
import { fetchCategories } from "../../store/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../loader";
const Categories = () => {
  const { categoryList, isLoading } = useSelector((state) => state.products);
  const { filterValues, setFilterValues } = useContext(FilterContext);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const isChecked = e.target.checked;
    if (isChecked) {
      setFilterValues((prev) => ({
        ...prev,
        [name]: [...prev[name], value],
      }));
    } else {
      const filterValue = filterValues[name].filter((item) => item !== value);
      setFilterValues((prev) => ({
        ...prev,
        [name]: filterValue,
      }));
    }
  };

  const handleChange = (value) => {
    setFilterValues((prev) => ({ ...prev, price: value[0] }));
  };

  return (
    <div className='h-full'>
      <div className='flex flex-col'>
        <h3 className='uppercase font-bold'>Categories:</h3>
        <div className='h-44 overflow-y-auto scroll-auto scrollbar my-2'>
          {isLoading ? (
            <div className='w-full h-full flex justify-center items-center'>
              <Loader />
            </div>
          ) : null}
          {!isLoading && categoryList.length === 0 ? (
            <p>No categories found.</p>
          ) : (
            null
          )}
          {categoryList.map((item, index) => {
            return (
              <Checkbox
                name='categories'
                key={index}
                lable={item}
                value={item}
                checked={filterValues.categories.includes(item)}
                onChange={handleCheckboxChange}
              />
            );
          })}
        </div>
      </div>
      <div className='my-3'>
        <h3 className='uppercase font-bold'>Price:</h3>
        <div className='my-2'>
          <RangeInput
            values={[filterValues.price]}
            step={1}
            min={5}
            onChange={handleChange}
            max={1000}
          />
        </div>
      </div>
      <div>
        <h3 className='uppercase font-bold'>Brands:</h3>
        <div className='h-44 overflow-y-auto scroll-auto scrollbar my-2'>
          {brandList.map((item, index) => {
            return (
              <Checkbox
                name='brands'
                key={index}
                lable={item}
                value={item}
                checked={filterValues.brands.includes(item)}
                onChange={handleCheckboxChange}
              />
            );
          })}
        </div>
      </div>
      <div className='mt-4'>
        <h3 className='uppercase font-bold'>Availability:</h3>
        <div className='my-2'>
          {stockList.map((item, index) => {
            return (
              <Checkbox
                name='stocks'
                key={index}
                lable={item}
                value={item}
                checked={filterValues.stocks.includes(item)}
                onChange={handleCheckboxChange}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
