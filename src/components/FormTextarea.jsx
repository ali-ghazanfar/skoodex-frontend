import { forwardRef } from 'react';
import { getInputStyles, getLabelStyles, getErrorStyles } from '../utils/formStyles';

const FormTextarea = forwardRef(({ label, error, className = '', rows = 4, required, ...props }, ref) => {
  return (
    <div className={className}>
      {label && (
        <label className={getLabelStyles()} htmlFor={props.id || props.name}>
          {required && <span className="text-red-500 mr-1">*</span>}
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        rows={rows}
        className={`${getInputStyles(error)} resize-none`}
        {...props}
      />
      {error && <p className={getErrorStyles()}>{error.message}</p>}
    </div>
  );
});

FormTextarea.displayName = 'FormTextarea';

export default FormTextarea;
