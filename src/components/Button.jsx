import React from 'react';

const Button = ({ children, type = 'button', className = '', ...props }) => {
  return (
    <button
      type={type}
      className={`w-full bg-primary text-white font-bold py-3.5 rounded-xl hover:bg-[#1e3a8a] transition-all duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
