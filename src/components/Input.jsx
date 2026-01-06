import React from 'react';

const Input = ({ label, id, type = 'text', placeholder, className = '', ...props }) => {
  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 bg-gray-50"
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default Input;
