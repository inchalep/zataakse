import React from "react";
import loaderImg from "../../assets/images/loader.gif";
const Loader = () => {
  return (
    <div className={`flex justify-center items-center w-[30px]`}>
      <figure>
        <img src={loaderImg} alt='Loader...' className='h-full w-full' />
      </figure>
    </div>
  );
};

export default Loader;
