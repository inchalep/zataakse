import React, { useState } from "react";
import { FaSearch, FaUser, FaShoppingCart, FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import DropdownMenu from "../dropdownMenu";
import { menuList } from "../../constants";

const Navbar = () => {
  const [isToggle, setToggle] = useState(false);
  return (
    <div className='py-4 shadow-md'>
      <div className='wrapper flex justify-between items-center'>
        <h1 className='font-semibold text-2xl'>Flatlogic</h1>
        <div className='hidden sm:flex items-center gap-x-8'>
          {menuList.map((item, index) => {
            return <DropdownMenu menu={item} key={index} />;
          })}
        </div>
        <div className='sm:hidden'>
          <button onClick={() => setToggle((prev) => !prev)}>
            {!isToggle ? <FaBars /> : <IoMdClose size={22} />}
          </button>
        </div>
        <div className='hidden sm:flex gap-x-8'>
          <button>
            <FaSearch />
          </button>
          <button>
            <FaUser />
          </button>
          <button className='relative'>
            <FaShoppingCart />
            <span className='w-4 h-4 rounded-full absolute text-xs -top-3 -right-3 bg-yellow-500'>
              0
            </span>
          </button>
        </div>
      </div>
      {isToggle ? (
        <div className='md:hidden p-3 px-6 absolute z-50 bg-white w-full h-[calc(100vh-65px)] top-[65px]'>
          <div className='flex justify-end gap-x-4'>
            <button>
              <FaSearch />
            </button>
            <button>
              <FaUser />
            </button>
            <button className='relative'>
              <FaShoppingCart />
              <span className='w-4 h-4 rounded-full absolute text-xs -top-3 -right-3 bg-yellow-500'>
                0
              </span>
            </button>
          </div>
          <div>
            {menuList.map((item, index) => {
              return <DropdownMenu menu={item} key={index} />;
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
