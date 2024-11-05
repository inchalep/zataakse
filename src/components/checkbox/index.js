import React from "react";

const Checkbox = (props) => {
  return (
    <div className='flex gap-x-2 items-center'>
      <input type='checkbox' {...props} />
      <label className='capitalize'>{props.lable}</label>
    </div>
  );
};

export default Checkbox;
