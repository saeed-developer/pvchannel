import React from 'react';

function Input({ ...props }) {
  return (
    <div className='my-8'>
      <input
        type={props.type}
        value={props.field.value}
        onChange={props.field.onChange}
        placeholder={props.placeholder}
        className='p-2 w-10/12 bg-transparent border-b-2 border-gray-400 outline-none'
      />
      <p>{props?.fieldState?.error?.message}</p>
    </div>
  );
}

export default Input;
