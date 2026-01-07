import { forwardRef, useState } from 'react';
import { getInputStyles, getLabelStyles, getErrorStyles } from '../utils/formStyles';
import { Eye } from '../svgs';

const FormInput = forwardRef(({ label, error, type = 'text', className = '', required, ...props }, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className={className}>
      {label && (
        <label className={getLabelStyles()} htmlFor={props.id || props.name}>
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        <input
          ref={ref}
          type={inputType}
          className={`${getInputStyles(error)} ${isPassword ? 'pr-12' : ''}`}
          {...props}
        />
        {isPassword && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-400 hover:text-primary transition-colors p-2"
            >
              <Eye show={showPassword} />
            </button>
          </div>
        )}
      </div>
      {error && <p className={getErrorStyles()}>{error.message}</p>}
    </div>
  );
});

FormInput.displayName = 'FormInput';

export default FormInput;

