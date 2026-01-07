import { useState, useRef, useEffect, useMemo, forwardRef } from 'react';
import { getInputStyles, getLabelStyles, getErrorStyles } from '../utils/formStyles';
import { ChevronDown, Search, Check } from '../svgs';

const FormSelect = forwardRef(({ 
  label, 
  error, 
  options = [], 
  className = '', 
  placeholder = 'Select an option',
  searchPlaceholder = 'Search...',
  showClearOption = true,
  clearOptionLabel = 'Remove Selection',
  required,
  ...props 
}, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);

  // Prepare options with clear option if needed
  const allOptions = useMemo(() => {
    return showClearOption 
      ? [{ value: '', label: clearOptionLabel }, ...options]
      : options;
  }, [showClearOption, clearOptionLabel, options]);

  // Find selected option based on value
  useEffect(() => {
    if (props.value !== undefined && props.value !== null && props.value !== '') {
      const option = allOptions.find(opt => String(opt.value) === String(props.value));
      setSelectedOption(option || null);
    } else {
      setSelectedOption(null);
    }
  }, [props.value, allOptions]);

  // Filter options based on search term
  const filteredOptions = allOptions.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Focus search input when dropdown opens
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    setSearchTerm('');
    
    // Trigger onChange event for react-hook-form
    if (props.onChange) {
      const syntheticEvent = {
        target: {
          name: props.name,
          value: option.value,
        },
      };
      props.onChange(syntheticEvent);
    }
    
    // Trigger onBlur if provided
    if (props.onBlur) {
      props.onBlur();
    }
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setSearchTerm('');
    }
  };

  const displayValue = selectedOption && selectedOption.value !== '' 
    ? selectedOption.label 
    : placeholder;
  const showPlaceholder = !selectedOption || selectedOption.value === '';

  return (
    <div className={`w-full ${className}`} ref={dropdownRef}>
      {label && (
        <label className={getLabelStyles()} htmlFor={props.id || props.name}>
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        {/* Hidden input for form integration with react-hook-form */}
        <input
          ref={ref}
          type="hidden"
          name={props.name}
          value={props.value || ''}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
        
        {/* Dropdown Button */}
        <button
          type="button"
          onClick={handleToggle}
          className={`${getInputStyles(error)} text-left flex items-center justify-between ${
            showPlaceholder ? 'text-gray-500' : 'text-gray-900'
          } hover:bg-gray-100 cursor-pointer`}
        >
          <span className="truncate">{displayValue}</span>
          <ChevronDown
            className={`w-5 h-5 transition-transform duration-200 flex-shrink-0 ${
              error ? 'text-red-500' : 'text-gray-400'
            } ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute z-50 w-full mt-2 bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
            {/* Search Bar */}
            {allOptions.length > 5 && (
              <div className="p-3 border-b border-gray-200">
                <div className="relative">
                  <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder={searchPlaceholder}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-primary outline-none text-sm bg-gray-50 text-gray-900 placeholder:text-gray-400"
                  />
                </div>
              </div>
            )}

            {/* Options List */}
            <div className="max-h-60 overflow-y-auto">
              {filteredOptions.length === 0 ? (
                <div className="px-4 py-8 text-center text-gray-500 text-sm">
                  No options found
                </div>
              ) : (
                filteredOptions.map((option, index) => {
                  const isClearOption = option.value === '';
                  const isSelected = selectedOption && String(selectedOption.value) === String(option.value);
                  return (
                    <button
                      key={`option-${option.value !== undefined ? option.value : 'empty'}-${index}`}
                      type="button"
                      onClick={() => handleSelect(option)}
                      className={`w-full px-4 py-3 text-left transition-colors ${
                        isClearOption
                          ? 'text-gray-500 hover:bg-gray-100 border-b border-gray-200'
                          : isSelected
                          ? 'bg-primary/10 text-primary font-semibold hover:bg-primary/15'
                          : 'text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={isClearOption ? 'text-gray-500' : ''}>{option.label}</span>
                        {isSelected && !isClearOption && (
                          <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        )}
                      </div>
                    </button>
                  );
                })
              )}
            </div>
          </div>
        )}
      </div>
      {error && <p className={getErrorStyles()}>{error.message}</p>}
    </div>
  );
});

FormSelect.displayName = 'FormSelect';

export default FormSelect;

