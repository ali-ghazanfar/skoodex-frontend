const Button = ({ children, type = 'button', className = '', variant = 'primary', ...props }) => {
  const baseStyles = 'font-bold py-3.5 rounded-xl transition-all duration-200';
  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-[#1e3a8a]',
    secondary: 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50',
  };
  const widthClass = className.includes('w-') ? '' : 'w-full';
  
  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant] || variantStyles.primary} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
