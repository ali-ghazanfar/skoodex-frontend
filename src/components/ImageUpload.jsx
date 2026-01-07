import { useState, useRef } from 'react';
import { Camera, Close } from '../svgs';
import { getErrorStyles } from '../utils/formStyles';

const ImageUpload = ({ label, error, value, onChange, className = '' }) => {
  const [preview, setPreview] = useState(value || null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file || !file.type.startsWith('image/') || file.size > 5 * 1024 * 1024) {
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
      onChange(file);
    };
    reader.readAsDataURL(file);
  };

  const handleRemove = (e) => {
    e.stopPropagation();
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    onChange(null);
  };

  const handleSquareClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      
      <div className="flex flex-col items-start gap-3">
        {/* Clickable Preview Square */}
        <div className="relative">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
            id="profile-upload"
          />
          <div
            onClick={handleSquareClick}
            className={`relative w-40 h-40 rounded-xl border-2 border-dashed overflow-hidden bg-gray-50/50 flex flex-col items-center justify-center cursor-pointer transition-all duration-200 group ${
              error
                ? 'border-red-300 hover:border-red-400'
                : 'border-gray-300 hover:border-primary hover:bg-gray-100/50'
            }`}
          >
            {preview ? (
              <>
                <img
                  src={preview}
                  alt="Profile preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-200 flex items-center justify-center">
                  <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Change Photo
                  </span>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center gap-3 px-4 py-2">
                <div className="p-2.5 rounded-full bg-gray-200/50 group-hover:bg-primary/10 transition-colors duration-200">
                  <Camera className="w-7 h-7 text-gray-400 group-hover:text-primary transition-colors duration-200" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-[10px] text-gray-500 leading-tight text-center">
                    Max size 5MB
                  </p>
                  <p className="text-[10px] text-gray-500 leading-tight text-center">
                    JPEG, JPG or PNG
                  </p>
                </div>
              </div>
            )}
          </div>
          {preview && (
            <button
              type="button"
              onClick={handleRemove}
              className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors z-10"
            >
              <Close className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {error && <p className={getErrorStyles()}>{error.message}</p>}
    </div>
  );
};

export default ImageUpload;

