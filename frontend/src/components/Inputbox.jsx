import React from 'react';

export const Inputbox = ({ label, placeholder, onChange }) => {
  return (
    <div className="mb-4">
      <label className=" block text-sm font-medium text-gray-700 mb-1 ">
        {label}
      </label>
      <input onChange={onChange}
        type="text"
        placeholder={placeholder}
        className="w-full p-2 border border-gray-300 rounded-md  text-left"
      />
    </div>
  );
};

export default Inputbox;
