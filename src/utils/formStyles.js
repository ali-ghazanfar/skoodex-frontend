export const getInputStyles = (error) => 
  `w-full px-4 py-3 rounded-xl border ${
    error 
      ? 'border-red-300 focus:border-red-500' 
      : 'border-gray-200 focus:border-primary'
  } outline-none transition-all duration-200 bg-gray-50 text-gray-900 placeholder:text-gray-400`;

export const getLabelStyles = () => 
  'block text-sm font-medium text-gray-700 mb-2';

export const getErrorStyles = () => 
  'mt-1 text-sm text-red-600';

