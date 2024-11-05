import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import { useRef } from "react";

const DropdownMenu = ({ menu }) => {
  const [isExpand, setIsExpand] = useState(false);
  const navRef = useRef();

  const handleMenuclick = () => {
    setIsExpand(!isExpand);
  };
  return (
    <div
      className='relative border-b md:border-0 py-2 md:p-1'
      ref={navRef}
      onMouseLeave={() => setIsExpand(false)}
    >
      {!menu.isSubMenu ? (
        <NavLink
          className={({ isActive }) => (isActive ? "underline" : null)}
          to={menu.url}
        >
          {menu.name}
        </NavLink>
      ) : (
        <div
          role='button'
          className='flex items-center gap-x-1 justify-between md:justify-start'
          onClick={() => handleMenuclick()}
        >
          <span className={isExpand ? "underline" : null}>{menu.name}</span>
          {menu.isSubMenu && <>{isExpand ? <FaCaretUp /> : <FaCaretDown />}</>}
        </div>
      )}
      {menu.children && isExpand && (
        <div className='md:absolute z-50  top-6 ml-2 bg-white p-2 w-20 rounded-md md:border md:shadow-md'>
          {menu.children.map((item, index) => {
            return <DropdownMenu menu={item} key={index} />;
          })}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
